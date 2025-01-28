const fetchLaunches = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://api.spacexdata.com/v3/launches?limit=10&offset=${(pageParam - 1) * 10}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return { data, nextPage: data.length ? pageParam + 1 : undefined };
  };

  export default fetchLaunches