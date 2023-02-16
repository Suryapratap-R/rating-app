<script lang="ts">
  import { FeedbackStore } from "../store";
  import Card from "./Card.svelte";

  export let item: { id: Number; text: String; rating: Number };
  const handleDelete = (itemId) => {
    FeedbackStore.update((currentFeedbacks) => {
      return currentFeedbacks.filter((feedback) => feedback.id !== itemId);
    });
  };
</script>

<Card>
  <div class="num-display">{item.rating}</div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">{item.text}</p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 48px;
    height: 48px;
    background-color: tomato;
    color: aliceblue;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 21px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    background: none;
    border: none;
    color: #2a2a2a;
  }
</style>
