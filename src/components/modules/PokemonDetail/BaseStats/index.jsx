import "./BaseStats.css";

export const BaseStats = ({ pokemon, backgroundSelected }) => {
  const maxStat = 255;

  const baseStatsNames = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    speed: "spd",
  };

  return (
    <div className="baseStats">
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
        return (
          <div key={name} className="item">
            <div className="rigth">
              <span style={{ color: backgroundSelected }}>
                {baseStatsNames[name]}
              </span>
              <p>0{base_stat}</p>
              <div className="line">
                <div
                  className="background"
                  style={{ background: backgroundSelected }}
                />
                <div
                  className="secondLine"
                  style={{
                    background: backgroundSelected,
                    opacity: "1",
                    width: `${(base_stat / maxStat) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
