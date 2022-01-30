const app = Vue.createApp({
    data() {
        return {
            myGoal: "My goal is to get placed and live stable",
            myLink: "https://www.linkedin.com/feed/?trk=eml-email_jobs_job_application_viewed_01-header-20-home"
        };
    },
    method: {
        myMethod() {
            const randomNumber = Math.random();
            if(randomNumber>0.5) {
                return 'My goal is master vue';
            }
            else {
                return 'My goal is get placed';
            }
        }
    }
});

app.mount('#my-goal');