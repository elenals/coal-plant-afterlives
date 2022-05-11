<script>
  import Scroll from "./Scrolly.svelte";

  let data = [
    { foo: 4, bar: 1 },
    { foo: 6, bar: 7 },
    { foo: 9, bar: 5 },
    { foo: 2, bar: 4 },
    { foo: 8, bar: 2 },
    { foo: 9, bar: 9 },
    { foo: 5, bar: 3 },
    { foo: 3, bar: 8 },
    { foo: 1, bar: 6 },
  ];

  import { tweened } from "svelte/motion";
  const tweenedX = tweened(data.map((d) => d.foo));

  const setFoo = function () {
    tweenedX.set(data.map((d) => d.foo));
  };
  const setBar = function () {
    tweenedX.set(data.map((d) => d.bar));
  };

  import { scaleLinear } from "d3-scale";

  let width = 400;
  let height = 400;

  let xScale = scaleLinear().domain([0, 10]).range([0, width]);
  let yScale = scaleLinear().domain([0, 10]).range([height, 0]);

  let currentStep;
  const steps = ["<p>Step 0!</p>", "<p>Step 1?</p>", "<p>Step 2.</p>"];

  $: if (currentStep == 0) {
    setFoo();
  } else if (currentStep == 1) {
    setBar();
  } else if (currentStep == 2) {
    setFoo();
  }
</script>

<section>
  <!-- The chart in the background, which is sticky thanks to CSS below -->
  <div class="chart">
    <svg {width} {height}>
      {#each data as d, index}
        <circle
          cx={xScale($tweenedX[index])}
          cy={yScale(d.bar)}
          r={15}
          fill="steelblue"
          stroke="#000000"
        />
      {/each}
    </svg>
  </div>

  <!-- The scrolling container which includes each of the text elements -->
  <Scroll bind:value={currentStep}>
    {#each steps as text, i}
      <div class="step" class:active={currentStep === i}>
        <div class="step-content">
          {@html text}
        </div>
      </div>
    {/each}
  </Scroll>
</section>

<style>
  /* The fixed chart */
  .chart {
    background: whitesmoke;
    width: 400px;
    height: 400px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 10%;
    margin: auto;
  }

  /* Scrollytelling CSS */
  .step {
    height: 80vh;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .step-content {
    background: whitesmoke;
    color: #ccc;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .step.active .step-content {
    background: white;
    color: black;
  }
</style>