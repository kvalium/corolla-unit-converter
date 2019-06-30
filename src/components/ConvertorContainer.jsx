import React from "react";

import Convertor from "./Convertor";

import { units, convertUnitToCorolla } from "../utils";

export default class ConvertorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: this.getUnit(),
      corollas: 0,
      currentVal: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      const unit = this.getUnit();
      const corollas = this.getCorollas(this.state.currentVal, unit);
      this.setState({ unit, corollas });
    }
  }

  getUnit = () =>
    units.find(({ name }) => name === this.props.category).sourceUnits[0].name;

  getCorollas = (val, unit = undefined) =>
    convertUnitToCorolla(
      this.props.category,
      unit ? unit : this.state.unit,
      val
    );

  onSelectUnit = unit => {
    const corollas = this.getCorollas(this.state.currentVal, unit);
    this.setState({ unit, corollas });
  };

  onChangeValue = val => {
    const corollas = this.getCorollas(val);
    this.setState({ currentVal: val, corollas });
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
