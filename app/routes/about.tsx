import { Link } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import karateLessonImage from "~/Assets/jpg/karate-lesson.jpg";
import blackBelt from "~/Assets/jpg/blackBelt.jpg";
import Navbar from "~/components/Navbar";
import karateLesson from "~/Assets/jpg/karate-lesson.jpg";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => ({
  title: "Welcome to DoBu Martial Arts",
  description: "Welcome to DoBu Martial Arts Gym were we build Pros",
});

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto mt-16 max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={karateLesson}
                  alt="People training on the beach"
                />
                <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
              </div>
              <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="block uppercase text-orange-500 drop-shadow-md">
                    {" "}
                    DOBU Martial Arts{" "}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 flex max-w-6xl">
            <div className="w-1/2 p-4">
              <h2 className="pt-4 text-3xl font-extrabold tracking-wide text-red-500">
                Teachers
              </h2>
              <p className="pt-4 text-neutral-600">
                This is Mauricio Gomez gym owner/head martial arts coach hes
                going to be around for all the beginner lesson to help everyone
                develop and have the best expereince possible when training MMA.
              </p>
            </div>
            <div className="mt-8 w-1/2 overflow-hidden">
              <img
                src={blackBelt}
                alt="Spiderman"
                className=" transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
