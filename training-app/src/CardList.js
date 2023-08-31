import ConceptCard from "./ConceptCard";
const CardList = (props) => {
  return (
    <ul id="concepts">
      <ConceptCard concepts={props.concepts[0]} />
      <ConceptCard concepts={props.concepts[1]} />
      <ConceptCard concepts={props.concepts[2]} />
    </ul>
  );
};
export default CardList;
