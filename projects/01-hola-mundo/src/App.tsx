import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    name: "Juan Hurtado",
    userName: "hurtadito08",
    initialIsFollowing: true,
  },
  {
    name: "Destiny 2",
    userName: "DestinyTheGame",
    initialIsFollowing: false,
  },
  {
    name: "Twitch",
    userName: "Twitch",
    initialIsFollowing: true,
  },
];

export function App() {
  // Puedes usar una función como prop 💜
  const addAt = (name: string) => `@${name}`;
  return (
    <>
      {
        users.map((user) => (
          <TwitterFollowCard
            key={user.userName}
            name={user.name}
            userName={user.userName}
            initialIsFollowing={user.initialIsFollowing}
            formatUserName={addAt}
          />
        ))
      }

      {/* Usando valores por defecto: */}
      <TwitterFollowCard />
    </>
  );
}