import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function GameList() {
  const [games, setGames] = useState([]);
  const game = useSelector((state) => state.game);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(`${baseURL}/games`, {});
      } catch (error) {
        console.log(error);
      }
    };
    getGames();
  }, [game]);
  return <div></div>;
}
