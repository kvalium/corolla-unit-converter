import React from "react";

import Convertor from "./Convertor";

import { categories, convertUnitToCorolla } from "../utils";

/**
 * ConvertorContainer embarks the logic of the Convertor component.
 */
export default class ConvertorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: this.getUnit(), // category unit
      corollas: 0, // number of Corollas
      currentVal: 0 // entered value.
    };
  }

  /**
   * Update the units and Corollas number when category changes.
   *
   * @param {Object} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      const unit = this.getUnit();
      const corollas = this.getCorollas(this.state.currentVal, unit);
      this.setState({ unit, corollas });
    }
  }

  /**
   * Get first category unit name.
   */
  getUnit = () =>
    categories.find(({ name }) => name === this.props.category).units[0].name;

  /**
   * Returns the number of Corollas corresponding to unit and value.
   *
   * @param {String} val entered value.
   * @param {String} unit current unit.
   */
  getCorollas = (val, unit = undefined) =>
    convertUnitToCorolla(
      this.props.category,
      unit ? unit : this.state.unit,
      val
    );

  /**
   * On select a new unit.
   *
   * @param {String} unit selected unit.
   */
  onSelectUnit = unit => {
    const corollas = this.getCorollas(this.state.currentVal, unit);
    this.setState({ unit, corollas });
  };

  /**
   * On value update.
   *
   * @param {Number} val on updated value in the input.
   */
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
