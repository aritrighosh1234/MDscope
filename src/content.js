// ============================================================
// MINDSCOPE BY ARITRI — CONTENT FILE
// Add, remove, or edit any section by modifying this file.
// ============================================================

export const SITE = {
  name: "Mindscope",
  tagline: "by Aritri",
  heroText: "Boutique Therapy for Thoughtful Emotional Care",
  heroSubtext:
    "A private, personalised space where healing begins with being truly heard.",
};

// ── ABOUT ────────────────────────────────────────────────────
export const DOCTOR = {
  name: "Aritri Ghosh",
  image: "therapist", // replace with image path or URL e.g. "/aritri.jpg"
  description:
    "Hi, I am Aritri Ghosh, a Clinical Psychologist with a Master’s in Clinical Psychology and a B.Sc. (Hons) in Psychology. I hold an RCI-registered certification in Autism Spectrum Disorder (ASD) from Jadavpur University and have trained at institutions including the National Institute of Behavioural Science, RG Kar Medical College, Mind Care Clinic Kolkata, and Fortis Hospital Kolkata.",
  description_p2:"My approach is rooted in evidence-based therapy, where I focus on creating a safe, non-judgmental space for you to feel heard, build self-awareness, and move toward meaningful change.",
};

// Cards below the doctor bio (icon: any Lucide icon name as string)
export const ABOUT_CARDS = [
  {
    icon: "Heart",
    title: "Thoughtful Emotional Care",
    description:
      "Every session is crafted with intention — honouring your pace, your story, and your unique path toward well-being.",
  },
  {
    icon: "Shield",
    title: "Safe & Confidential Space",
    description:
      "What you share stays here. A judgment-free environment where vulnerability is met with the utmost respect and privacy.",
  },
  {
    icon: "Compass",
    title: "Guided Self-Discovery",
    description:
      "Together we illuminate patterns, unlock strengths, and help you build a life that feels authentically yours.",
  },
];

// ── SERVICES ─────────────────────────────────────────────────
// Add a new object to add a service; remove one to hide it.
export const SERVICES = [
  {
    id: "cbt",
    title: "Cognitive Behavioural Therapy",
    abbr: "CBT",
    shortNote:
      "A structured therapy that helps identify and change negative thought patterns and behaviours to improve emotional well-being.",
    tags: ["Anxiety", "Depression", "Stress", "Negative Thinking", "Phobias", "Sleep Issues"],
    fullDescription:
      "Cognitive Behavioural Therapy (CBT) is one of the most researched and effective forms of psychotherapy. It works on the principle that our thoughts, feelings, and behaviours are deeply interconnected. By learning to identify distorted or unhelpful thought patterns — called cognitive distortions — you can begin to reframe them into more balanced perspectives.\n\nIn sessions, we'll work collaboratively to map out your thought cycles, challenge assumptions that keep you stuck, and build practical coping strategies. CBT is typically structured and goal-oriented, meaning you'll see measurable progress over time. Homework and reflection exercises between sessions help embed the changes into daily life.",
  },
  {
    id: "erp",
    title: "Exposure & Response Prevention",
    abbr: "ERP",
    shortNote:
      "A targeted therapy that reduces anxiety by exposing you to fears while preventing compulsive responses.",
    tags: ["OCD", "Compulsions", "Intrusive Thoughts", "Fear", "Anxiety Triggers"],
    fullDescription:
      "Exposure and Response Prevention (ERP) is the gold-standard treatment for Obsessive-Compulsive Disorder (OCD) and related anxiety conditions. The approach works by gradually and safely exposing you to situations, thoughts, or images that trigger anxiety — while resisting the urge to perform compulsive behaviours or mental rituals.\n\nThrough repeated exposure without the compulsive response, your brain learns that the feared outcome is unlikely and that you can tolerate the discomfort. Over time, anxiety naturally decreases. ERP requires courage but is highly effective, with most clients experiencing significant relief within weeks of consistent practice.",
  },
  {
    id: "eft",
    title: "Emotionally Focused Therapy",
    abbr: "EFT",
    shortNote:
      "A therapy focused on improving emotional bonds and communication, especially in relationships.",
    tags: ["Relationships", "Attachment", "Communication", "Conflict Resolution", "Emotional Connection"],
    fullDescription:
      "Emotionally Focused Therapy (EFT) is a humanistic, attachment-based approach developed to help individuals and couples deepen emotional bonds and improve relational patterns. It draws on attachment theory — the understanding that humans are wired for close emotional connection — to identify and transform negative interaction cycles.\n\nIn EFT sessions, we explore the deeper emotions and attachment needs that drive conflicts and disconnection. By creating new, corrective emotional experiences within the therapeutic relationship (or the couple's dynamic), EFT fosters lasting change. It is especially powerful for couples, but equally transformative for individuals working on relationship patterns rooted in early attachment.",
  },
  {
    id: "act",
    title: "Acceptance & Commitment Therapy",
    abbr: "ACT",
    shortNote:
      "A mindfulness-based approach that helps you accept difficult thoughts and commit to value-driven actions.",
    tags: ["Mindfulness", "Acceptance", "Overthinking", "Values", "Stress", "Anxiety"],
    fullDescription:
      "Acceptance and Commitment Therapy (ACT) invites you to stop fighting your inner experience and instead cultivate psychological flexibility. Rather than trying to eliminate difficult thoughts or feelings, ACT teaches you to observe them without being controlled by them — and then take meaningful action aligned with your deepest values.\n\nCore ACT skills include mindfulness, cognitive defusion (stepping back from thoughts), and values clarification. Sessions blend practical exercises with insight-oriented exploration. ACT is particularly effective for chronic stress, anxiety, and anyone who feels stuck in patterns of avoidance or overthinking.",
  },
  {
    id: "sft",
    title: "Solution-Focused Therapy",
    abbr: "SFT",
    shortNote:
      "A goal-oriented therapy that focuses on solutions and strengths rather than problems.",
    tags: ["Goal Setting", "Motivation", "Personal Growth", "Confidence", "Problem Solving"],
    fullDescription:
      "Solution-Focused Therapy (SFT) is a future-oriented, strengths-based approach that shifts the focus from what's wrong to what's possible. Rather than dwelling extensively on the origins of problems, SFT explores what is already working in your life and amplifies those successes.\n\nUsing techniques like the 'miracle question', scaling exercises, and exception-finding, SFT helps you envision your preferred future and take concrete steps toward it. It tends to be brief and highly practical, making it ideal for those who want clear direction and feel ready to move forward. SFT is particularly effective for life transitions, confidence building, and goal clarification.",
  },
  {
    id: "dbt",
    title: "Dialectical Behaviour Therapy",
    abbr: "DBT",
    shortNote:
      "A skills-based therapy that teaches emotional regulation, distress tolerance, and healthier coping strategies.",
    tags: ["Emotional Regulation", "Mood Swings", "Impulsivity", "Self-Harm", "Stress Tolerance"],
    fullDescription:
      "Dialectical Behaviour Therapy (DBT) was originally developed for individuals with borderline personality disorder but has since proven effective for a wide range of emotional and behavioural challenges. DBT combines cognitive-behavioural techniques with mindfulness practices and a dialectical philosophy — the idea that seemingly opposite truths can both be valid.\n\nThe four core skill modules in DBT are: Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness. In sessions, you'll learn practical skills to manage overwhelming emotions, reduce impulsive reactions, survive crises without making things worse, and build healthier relationships.",
  },
  {
    id: "rebt",
    title: "Rational Emotive Behaviour Therapy",
    abbr: "REBT",
    shortNote:
      "A therapy that helps identify and challenge irrational beliefs to develop healthier thinking patterns.",
    tags: ["Irrational Beliefs", "Anger", "Anxiety", "Self-Doubt", "Cognitive Restructuring"],
    fullDescription:
      "Rational Emotive Behaviour Therapy (REBT), developed by Albert Ellis, is one of the earliest forms of cognitive-behavioural therapy. It is based on the premise that emotional distress is not caused by events themselves, but by the rigid, irrational beliefs we hold about those events.\n\nUsing the ABC model (Activating event → Belief → Consequence), REBT helps you identify the specific irrational beliefs fuelling your distress — such as demands for perfection, catastrophising, or low frustration tolerance — and actively dispute and replace them with more rational, flexible alternatives. REBT is direct, highly active, and teaches lifelong thinking tools.",
  },
];

// ── RESOURCES / BLOG ─────────────────────────────────────────
// Add a new object to add a blog post; remove one to hide it.
export const RESOURCES = [
  {
  id: "r1",
  title: "The Window of Tolerance: Understanding Your Emotional Capacity",
  date: "February 2, 2025",
  image: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
  excerpt:
    "Not all overwhelm is weakness — sometimes it’s your nervous system asking for safety. Learn how to recognise and return to your emotional balance.",
  content:
    "There are moments when even small things feel too much — and others when you feel completely numb. These are not signs of failure; they are signals from your nervous system.\n\n**What Is the Window of Tolerance?**\nCoined by Dr. Dan Siegel, the 'window of tolerance' refers to the zone where we feel regulated and able to respond to life with clarity. Within this window, we can think, feel, and stay present.\n\nWhen we move outside of it, we may experience hyperarousal (anxiety, anger, panic) or hypoarousal (numbness, shutdown, disconnection).\n\n**Why This Matters in Therapy**\nUnderstanding your window helps you recognise that emotional overwhelm is not a personal flaw — it’s a physiological response. Therapy often focuses on expanding this window gently over time.\n\n**Ways to Return to Regulation**\n• Grounding through the senses (touch, sound, sight)\n• Slow, intentional breathing\n• Orienting yourself to the present moment\n• Reaching out for safe connection\n\nHealing is not about never leaving your window — it’s about learning how to come back.\n\nYour nervous system is not broken. It is trying to protect you.",
  credits: {
    author: "Dan Siegel",
    book: "The Developing Mind"
  }
},
 {
  id: "r2",
  title: "Self-Compassion Is Not Self-Indulgence",
  date: "February 18, 2025",
  image: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNjZW5lcnl8ZW58MHx8MHx8fDA%3D",
  excerpt:
    "The way you speak to yourself shapes how you heal. What if kindness, not criticism, is what actually creates change?",
  content:
    "Many of us believe that being hard on ourselves is what keeps us accountable. That if we soften, we’ll lose discipline or direction. But research suggests the opposite.\n\n**What Is Self-Compassion?**\nDr. Kristin Neff defines self-compassion as treating yourself with the same kindness, care, and understanding you would offer to someone you love.\n\nIt includes three core elements: self-kindness, common humanity, and mindfulness.\n\n**Why It Matters**\nHarsh self-criticism often activates threat responses in the brain, making growth harder, not easier. Self-compassion, on the other hand, creates a sense of safety — which is essential for learning and change.\n\n**Practicing Self-Compassion**\n• Notice your inner dialogue without judgment\n• Replace criticism with gentle, honest language\n• Remind yourself: struggle is part of being human\n• Pause and ask: what do I need right now?\n\nSelf-compassion is not letting yourself off the hook. It’s creating the conditions where real change becomes possible.\n\nYou don’t grow by punishing yourself. You grow by understanding yourself.",
  credits: {
    author: "Kristin Neff",
    book: "Self-Compassion: The Proven Power of Being Kind to Yourself"
  }
},
  {
  id: "r3",
  title: "Attachment Styles: Why We Love the Way We Do",
  date: "March 1, 2025",
  image: "https://images.unsplash.com/photo-1629446097460-ac6468adf8b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNjZW5lcnklMjBhdHRhY2htZW50fGVufDB8fDB8fHww",
  excerpt:
    "The patterns you notice in your relationships are not random — they are learned. Understanding attachment can help you relate with more clarity and care.",
  content:
    "Have you ever wondered why you react strongly in relationships — why closeness sometimes feels overwhelming, or distance feels unbearable?\n\n**Understanding Attachment**\nAttachment theory, originally developed by John Bowlby, suggests that our early relationships shape how we connect with others later in life.\n\nThese patterns often fall into four styles: secure, anxious, avoidant, and disorganised.\n\n**How It Shows Up**\nAnxious attachment may seek reassurance and fear abandonment. Avoidant attachment may value independence and struggle with emotional closeness. Secure attachment allows for both connection and autonomy.\n\nNone of these patterns are 'wrong' — they are adaptations.\n\n**Can Attachment Change?**\nYes. Through awareness, therapy, and safe relationships, attachment patterns can evolve over time.\n\n**Moving Toward Security**\n• Notice your patterns without judgment\n• Communicate needs clearly and directly\n• Build relationships that feel consistent and safe\n• Allow yourself to receive support\n\nYou are not stuck in your patterns. With awareness and care, new ways of relating become possible.",
  credits: {
    author: "John Bowlby",
    book: "Attachment and Loss"
  }
},
];

// ── CONTACT ──────────────────────────────────────────────────
export const CONTACT = {
  email: "ghosharitri97@gmail.com",
  phone: "+91 6290954149",
  whatsapp: "916290954149",
  location: "North Bank Diagnostic Centre, Bandhaghat, Salkia, Howrah, West Bengal, 711106",
  instagram:  "www.instagram.com/mindscopeby",
  calendly: "#", // replace with booking link
};
