const thoughts = {
    college: [
        "I go to college for attendance… not education 😌",
        "First bench for dreams, last bench for reality",
        "College WiFi connects faster than my brain 📶",
        "I attend classes mentally… from my bed 😴",
        "ID card is more important than knowledge"
    ],

    study: [
        "Study for 10 minutes → feel like topper 😎",
        "Exam tomorrow… motivation today missing",
        "Syllabus: 5 units. Me: I know 0.5 unit 💀",
        "I don’t fail… I just test the teacher’s patience",
        "Last night study = next day regret"
    ],

    attendance: [
        "75% attendance is a myth",
        "Present sir… physically only",
        "Mass bunk is the real teamwork 😂",
        "Proxy attendance is an art",
        "Attendance shortage = life crisis"
    ],

    canteen: [
        "Canteen food builds immunity… or courage 😆",
        "Maggi is the real best friend",
        "Hostel night = food + gossip + no sleep",
        "Pocket money ends… hunger begins",
        "Diet starts tomorrow (never comes)"
    ],

    coding: [
        "Code works = miracle",
        "Copy paste from internet = 90% project done 😎",
        "Error shows → confidence goes",
        "Fix bug → create 5 new bugs",
        "Project deadline = sudden genius mode"
    ],

    friends: [
        "Group study = group talking",
        "One friend studies, others motivate 😆",
        "Notes shared = friendship confirmed",
        "Class boring → memes interesting",
        "Friends are temporary… attendance shortage is permanent"
    ],

    savage: [
        "Internal marks are based on teacher’s mood",
        "We study only before exams… tradition",
        "Degree is loading… knowledge buffering…",
        "Wake up early? No thanks",
        "College life = best stress ever"
    ]
};

function showThought(category) {
    let list = thoughts[category];
    let random = list[Math.floor(Math.random() * list.length)];
    document.getElementById("output").innerText = random;
}

function randomThought() {
    let categories = Object.keys(thoughts);
    let randomCategory = categories[Math.floor(Math.random() * categories.length)];
    showThought(randomCategory);
}