import Accordion from "react-bootstrap/Accordion";
import { useMenu } from "../../contexts/MenuContext";
import StepperDenuncia from "../Stepper/Stepper";

const RoadmapsAccordion = ({ roadmaps }) => {
  const { state } = useMenu();
  return (
    <Accordion
      style={{ width: state.open ? "85%" : "95%", float: "right" }}
      defaultActiveKey="0"
    >
      {roadmaps.map((roadmap, index) => {
        return (
          <Accordion.Item key={roadmap.id} eventKey={index}>
            <Accordion.Header>{roadmap.name}</Accordion.Header>
            <Accordion.Body>
              <StepperDenuncia
                steps={roadmap?.steps}
                information={roadmap?.info}
              />
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default RoadmapsAccordion;
