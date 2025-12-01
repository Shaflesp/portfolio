export default {
  async fetch(request) {
    return new Response("Hello from your Placeholder Worker!", { status: 200 });
  },
};