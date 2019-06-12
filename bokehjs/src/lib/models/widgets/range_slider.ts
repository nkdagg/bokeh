import * as numbro from "numbro"

import {AbstractSlider, AbstractSliderView, SliderSpec} from "./abstract_slider"
import * as p from "core/properties"

export class RangeSliderView extends AbstractSliderView {
  model: RangeSlider

  protected _calc_to(): SliderSpec {
    return {
      start: this.model.start,
      end: this.model.end,
      value: this.model.value,
      step: this.model.step,
    }
  }

  protected _calc_from(values: number[]): number[] {
    return values
  }
}

export namespace RangeSlider {
  export type Attrs = p.AttrsOf<Props>

  export type Props = AbstractSlider.Props
}

export interface RangeSlider extends RangeSlider.Attrs {}

export class RangeSlider extends AbstractSlider {
  properties: RangeSlider.Props

  constructor(attrs?: Partial<RangeSlider.Attrs>) {
    super(attrs)
  }

  static initClass(): void {
    this.prototype.default_view = RangeSliderView

    this.override({
      format: "0[.]00",
    })
  }

  behaviour = "drag" as "drag"
  connected = [false, true, false]

  protected _formatter(value: number, format: string): string {
    return numbro.format(value, format)
  }
}
RangeSlider.initClass()
