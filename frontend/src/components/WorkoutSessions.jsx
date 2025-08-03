import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Ready to take control of your fitness? Join our expert-led workout sessions designed for all levels, from beginners to seasoned athletes. With personalized guidance and a supportive community, your goals are within reach.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
         Our group and individual workout programs combine science-backed training methods with top-tier equipment to keep you challenged and progressing.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Transform Your Body, Boost Your Mind. Your Gym Journey Starts Today!</h4>
            <p>
              Our gym offers structured workout sessions, tailored plans, and certified trainers to help you train smarter, not just harder.
            </p>
          </div>
          <div>
            <h4>Unleash Your Strength. Get Access to Expert Trainers and Modern Equipment!</h4>
            <p>
              With flexible schedules, energizing group sessions, and expert support, we make it easy to stay committed and inspired.
            </p>
          </div>
          <div>
            <h4>More Than a Gym – It’s a Lifestyle. Start Your Transformation Now!</h4>
            <p>
              Tired of boring routines and slow progress? Our dynamic workout sessions are designed to push your limits and deliver real results.
            </p>
          </div>
          <div>
            <h4>No Excuses, Just Results – Join the Club That Pushes You Forward!</h4>
            <p>
              Don’t wait for the ‘right time’—your transformation starts now. With high-energy workouts, a welcoming environment,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
