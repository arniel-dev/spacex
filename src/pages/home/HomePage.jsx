/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useInfiniteQuery } from "@tanstack/react-query";
import _ from "lodash";
import fetchLaunches from "../../api/fetchLaunches";
import Search from "../../components/search/Search";
import Loading from "../../components/loading/Loading";
import LaunchDetail from "../../components/launchDetail/LaunchDetail";
import ShowError from "../../components/showError/ShowError";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["launches"],
    queryFn: fetchLaunches,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (
      scrollHeight - scrollTop <= clientHeight + 50 && // Trigger fetch when near the bottom
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  React.useEffect(() => {
    const throttledHandleScroll = _.throttle(handleScroll, 200); // Throttle scroll event to avoid excessive calls
    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [hasNextPage, isFetchingNextPage]);

  const filteredLaunches = data?.pages
    .flatMap((page) => page.data)
    .filter((launch) =>
      launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div
      style={{
        padding: "16px",
        width: "80vw",
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        SpaceX Launches
      </Typography>
      <Search value={searchTerm} setFunction={setSearchTerm} />

      <Loading isLoading={isLoading} />
      <ShowError isError={isError} message={error?.message} />
      <LaunchDetail data={filteredLaunches} />
      <Loading isLoading={isFetchingNextPage} />

      {!hasNextPage && !isLoading && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ marginTop: "16px" }}
        >
          End of list
        </Typography>
      )}
    </div>
  );
};

export default HomePage;
