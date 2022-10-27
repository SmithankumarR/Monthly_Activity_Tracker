import React from "react";

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let Months = [
      "january",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      <>
        <div className="container flex bg-white">
          <div className="text-center bg-slate-300">
            <h2 className="bold text-2xl"> </h2>
            <p className="bold text-lg bg-orange-500 text-white"></p>
          </div>
          <div>
            {Months.map((month) => {
              let dates = month.getDate();
              return (
                <>
                  {dates.map((date) => (
                    <button> {date} </button>
                  ))}
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Activity;
