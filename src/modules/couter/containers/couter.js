
import { compose,lifecycle,withStateHandlers} from "recompose";
export const hoc = compose(
    withStateHandlers(
        {
            count: 0
          },
          {
            increment: ({ count }) => () => ({ count: count + 1 }),
            decrement: ({ count }) => () => ({ count: count - 1 })
          }
    ),
    lifecycle({
        componentDidMount: function () {
            console.log("竟然进来了？");
        }
    })
);