const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "80px auto", background: "none", display: "block" }}
      width="94px"
      height="94px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="#7d5753">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.352112676056338s"
          calcMode="spline"
          keyTimes="0;1"
          values="13;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#7d5753;#441a21;#1f1418;#e0aa82;#7d5753"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#7d5753">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;13;13;13"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#e0aa82">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;13;13;13"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.352112676056338s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.352112676056338s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#1f1418">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;13;13;13"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.704225352112676s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.704225352112676s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#441a21">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;13;13;13"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.056338028169014s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.408450704225352s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.056338028169014s"
        ></animate>
      </circle>
    </svg>
  );
};

export default Spinner;
