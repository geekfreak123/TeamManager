const Header = ({ teamMemberCount, selectedTeam }) => {
  return (
    <header>
      <h1>Team Member Allocation</h1>
      <p>
        {selectedTeam} has {teamMemberCount} Members
      </p>
    </header>
  );
};

export default Header;
