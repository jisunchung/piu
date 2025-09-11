import { LEVEL_PATHS, LEVELS, type LevelType } from "@constants";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "@hooks/auth/useUser";
import useGoogleSignin from "@hooks/useGoogleSignin";

import Avatar from "./Avatar";
import Button from "./Button";
import Flex from "./Flex";

export default function NavBar() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { signin } = useGoogleSignin();

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <div className="ml-auto" onClick={() => navigate("/my")}>
          <Avatar username={user.name} />
        </div>
      );
    } else {
      return (
        <Button color="secondary" className="ml-auto" onClick={signin}>
          Get Started
        </Button>
      );
    }
  }, [user, navigate, signin]);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavLinkClick = (level: LevelType) => {
    if (user) {
      navigate(LEVEL_PATHS[level]);
    } else {
      handleScroll(level);
    }
  };

  return (
    <Flex
      align="center"
      className="fixed top-0 right-0 left-0 z-1 h-20 bg-(--color-primary) px-10 shadow-md"
    >
      <a href="/" className="text-white">
        Logo
      </a>

      <Flex className="absolute left-1/2 hidden -translate-x-1/2 space-x-4 sm:flex">
        {LEVELS.map((level) => (
          <div
            className="cursor-pointer text-white hover:underline"
            key={level}
            onClick={() => {
              handleNavLinkClick(level);
            }}
          >
            {level}
          </div>
        ))}
      </Flex>

      {renderButton()}
    </Flex>
  );
}
