<script lang="ts">
  import { createEventDispatcher } from "svelte";


  let selected = 10;
  const dispatch = createEventDispatcher();
  const onChange = (e) => {    
    selected = e.currentTarget.value;
    dispatch('rating-select', selected)
  };
</script>

<ul class="rating">
  <li>
    <input
      type="radio"
      name="rating"
      id="num1"
      value="1"
      checked={selected === 1}
      on:change={onChange}
    />
    <label for="num1">1</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num2"
      value="2"
      checked={selected === 2}
      on:change={onChange}
    />
    <label for="num2">2</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num3"
      value="3"
      checked={selected === 3}
      on:change={onChange}
    />
    <label for="num3">3</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num4"
      value="4"
      checked={selected === 4}
      on:change={onChange}
    />
    <label for="num4">4</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num5"
      value="5"
      checked={selected === 5}
      on:change={onChange}
    />
    <label for="num5">5</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num6"
      value="6"
      checked={selected === 6}
      on:change={onChange}
    />
    <label for="num6">6</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num7"
      value="7"
      checked={selected === 7}
      on:change={onChange}
    />
    <label for="num7">7</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num8"
      value="8"
      checked={selected === 8}
      on:change={onChange}
    />
    <label for="num8">8</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num9"
      value="9"
      checked={selected === 9}
      on:change={onChange}
    />
    <label for="num9">9</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num10"
      value="10"
      checked={selected === 10}
      on:change={onChange}
    />
    <label for="num10">10</label>
  </li>
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background-color: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }
  .rating li label {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    padding: 10px;
    line-height: 1.5;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }

   /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }

</style>
