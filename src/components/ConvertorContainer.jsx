import React from "react";

import Convertor from "./Convertor";

import { units, convertUnitToCorolla } from "../utils";

export default class ConvertorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: units.find(({ name }) => name === this.props.category)
        .sourceUnits[0].name,
      corollas: 0,
      currentVal: 0
    };
  }

  getCorollas = val =>
    convertUnitToCorolla(this.props.category, this.state.unit, val);

  onSelectUnit = unit => {
    this.setState({ unit, corollas: this.getCorollas(this.state.currentVal) });
  };

  onChangeValue = val => {
    this.setState({ currentVal: val, corollas: this.getCorollas(val) });
  };

  render() {
    return (
      <Convertor
        category={this.props.category}
        onSelectUnit={this.onSelectUnit}
        corollas={this.state.corollas}
        onChangeValue={this.onChangeValue}
      />
    );
  }
}
