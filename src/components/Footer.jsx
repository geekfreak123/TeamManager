const Footer = () => {
  var today = new Date();
  return (
    <footer>
      <h5>Team Allocation App - {today.getFullYear()}</h5>
    </footer>
  );
};

export default Footer;
