import { Link } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import karateLessonImage from "~/Assets/jpg/karate-lesson.jpg";
import Timetable from "~/Assets/jpg/Timetable.jpg";
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
                  src={karateLessonImage}
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
                The Current Timetable
              </h2>
              <p className="pt-4 text-neutral-600">
                Are you tired of feeling disorganized and unsure of what your
                fitness routine should look like? Look no further than a gym
                lesson calendar! By using a lesson calendar, you can take the
                guesswork out of your workouts and create a plan that suits your
                needs and goals. Not only will a lesson calendar help you stay
                organized and motivated, but it will also help you track your
                progress and make adjustments as needed. Plus, with a clear plan
                in place, you'll be less likely to skip workouts or fall off
                track. So why not give it a try? With a gym lesson calendar, you
                can take control of your fitness journey and achieve the results
                you desire.
              </p>
            </div>
            <div className="mt-8 w-1/2 overflow-hidden">
              <img
                src={Timetable}
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
