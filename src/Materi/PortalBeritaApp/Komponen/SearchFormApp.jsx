import React from "react";

export default class SearchFormApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    const handleSubmit = (e) => {
      e.preventDefault();

      this.props.searchText(this.state.text);
      console.log(this.state.text);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="search NEWS here" className="py-1 px-2 rounded-l-lg" onChange={(e) => this.setState({ text: e.target.value })} />
          <button type="submit" className="bg-green-400 py-1 px-2 rounded-r-lg text-white">
            search
          </button>
        </form>
      </div>
    );
  }
}
