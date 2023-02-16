import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores ipsum, illo iusto quaerat tempora laudantium ut officia eum mollitia adipisci nesciunt voluptatem, reprehenderit voluptatibus repellat porro laboriosam corrupti perferendis placeat incidunt dicta?",
  },
  {
    id: 2,
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores ipsum, illo iusto quaerat tempora laudantium ut officia eum mollitia adipisci nesciunt voluptatem, reprehenderit voluptatibus repellat porro laboriosam corrupti perferendis placeat incidunt dicta?",
  },
  {
    id: 3,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores ipsum, illo iusto quaerat tempora laudantium ut officia eum mollitia adipisci nesciunt voluptatem, reprehenderit voluptatibus repellat porro laboriosam corrupti perferendis placeat incidunt dicta?",
  },
]);