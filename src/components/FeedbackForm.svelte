<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import { FeedbackStore } from "../store";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let text = "";
  let btnDisabled = true;
  const min = 10;
  let rating = 10;
  let message: String | null;

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be atleast ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleSelect = (e: CustomEvent) => (rating = e.detail);

  const handleSubmit = () => {
    if (text.trim().length > min) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      };
      FeedbackStore.update((currentFeedbacks) => {
        return [newFeedback, ...currentFeedbacks];
      });
      text = "";
    }
  };
</script>

<Card>
  <header><h2>How would you rate your service with us?</h2></header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input
        type="text"
        placeholder="Tell us something that keeps you coming back"
        bind:value={text}
        on:input={handleInput}
      />
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    background-color: #fff;
    color: black;
  }
  input:focus {
    outline: none;
  }
  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
