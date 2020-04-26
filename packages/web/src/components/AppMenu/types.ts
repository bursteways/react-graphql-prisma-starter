import {SvgIconTypeMap} from "@material-ui/core";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";

export interface Route {
  Icon: OverridableComponent<SvgIconTypeMap>;
  id: number;
  text: string;
}
