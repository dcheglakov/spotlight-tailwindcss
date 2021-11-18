import PropTypes from "prop-types";

export default function Section({ children, title = "Title" }) {
  return (
    <section className="py-4 space-y-4">
      <h2 className="text-2xl font-medium mb-2">{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
