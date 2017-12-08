
import { compose,lifecycle} from "recompose";
export const hoc = compose(
    lifecycle({
        componentDidMount: function () {
            console.log("竟然进来了？");
        }
    })
);