import { LEVEL_PATHS, LEVELS, type LevelType } from "@constants";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import useUser from "@hooks/auth/useUser";
import useScrollProgress from "@hooks/ui/useScrollProgress";
import useGoogleSignin from "@hooks/useGoogleSignin";

import Avatar from "./Avatar";
import Button from "./Button";
import Flex from "./Flex";

export default function NavBar() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { signin } = useGoogleSignin();
  const { progress } = useScrollProgress();

  const progressMotionValue = useMotionValue(progress);

  useEffect(() => {
    progressMotionValue.set(progress);
  }, [progress, progressMotionValue]);

  const margin = useTransform(progressMotionValue, [0, 30], ["0rem", "2rem"]);
  const borderRadius = useTransform(
    progressMotionValue,
    [0, 30],
    ["0px", "9999px"],
  );

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
    <motion.div
      className="bg-primary fixed top-0 right-0 left-0 z-10 overflow-hidden shadow-md"
      style={{ margin, borderRadius }}
    >
      <Flex align="center" className="h-20 px-10">
        <Link to="/" className="text-white">
          Logo
        </Link>

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
    </motion.div>
  );
}
