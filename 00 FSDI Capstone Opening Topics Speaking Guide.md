# FSDI Capstone Opening Topic Decks Speaking Guide

Use this guide for the 15-20 minute topic block at the beginning of class.
FSDI capstones are full stack web projects built with Django, React, or both. Projects are student-chosen.

Suggested rhythm for each class:

1. Spend 2 minutes framing why the topic matters.
2. Spend 8-10 minutes walking through the framework and examples.
3. Spend 4-5 minutes on discussion prompts.
4. End with the studio task and connect it to the 5-minute stand-up.

Repeated stand-up prompt — each student should say:

- What I will improve today.
- What page, model, endpoint, or document section it touches.
- What evidence will prove it works.

AI policy reminder — students may use AI openly, but keep an AI usage log with:

- Prompt used.
- Code accepted or rejected.
- Manual changes made.
- How they tested it.
- Remaining risk or question.

---

## 118 #1 - What Makes a CRUD App Feel Like a Real Product?
Deck: `118/118 #1 - What makes a CRUD app feel like a real product.html`

Core idea:

CRUD is only the skeleton. Product feeling comes from purpose, trust, feedback, and a polished path through the main task.

### Slide 1: Title

Talk points:

- Add, list, edit, delete are NOT the same as a finished product.
- A real product helps the user make a decision, complete a routine, or understand progress.
- Goal today is not a huge new feature — it is making ONE existing flow feel intentional.
- Opening question: what is the main repeated action in your app?

### Slide 2: Why this matters

On the slide:

- Pages are named after database tables instead of user goals.
- The app saves data but doesn't help users understand what changed.
- The happy path works, but empty and error states feel unfinished.
- Users think in goals — “See my orders arriving this week”, not “Order list.”

Talk points:

- A page called Products or Orders is fine internally, but users think in goals.
- Rename the purpose of a page in plain language.
- A polished app tells the user what happened after save, delete, or change.

### Slide 3: Framework

On the slide:

- Job to be done — The real task the app helps finish.
- Opinionated workflow — Guides the next step, not just buttons.
- Useful states — Empty, loading, error, success.
- Trust & feedback — Confirm the action worked.
- Repeatable loop — A reason to come back.

Talk points:

- Job to be done: what real-world job is the app helping with?
- Opinionated workflow: guide the next step, not just show buttons.
- Useful states: empty, loading, error, success are part of the product.
- Trust & feedback: users need confirmation their action worked.
- Repeatable loop: why would they return?
- Class move: ask students to point to where each item lives in their app.

### Slide: Basic / Product / Proof

On the slide:

- Add, list, edit, and delete products.
- Stock status, sales summary, and a clear next action.
- The owner can answer: “What needs restocking this week?”
- CRUD stores information. A product turns stored information into meaning.

Talk points:

- Basic = it saves. Product = it means something. Evidence = the user can answer a question.
- Prompt: which column is your main workflow in right now?

### Slide: Examples

On the slide:

- Store: Cart, order status, and recommendations connect browsing to buying.
- Booking: Availability, confirmations, and reminders reduce no-shows.
- Community: Profiles, activity, and replies show that posting leads somewhere.

Talk points:

- These are patterns students can borrow directly.
- Ask: which example is closest to your app, and what would you borrow?

### Slide: AI as a design partner

On the slide:

- Critique one flow, not the whole app
- Ask for empty / loading / error copy for a specific page
- Reject code that renames models or URLs without a reason
- Can you explain why the generated code belongs in your architecture, and how you tested it?

Talk points:

- AI is useful for critique, state ideas, and wording.
- AI is risky when it invents a new architecture for a small change.

### Slide: Discussion prompts

On the slide:

- Which part of your app is still just a database table?
- What would make one repeated action feel rewarding?
- What proof would convince a user the app is useful?

Talk points:

- Give students 60 seconds to answer one prompt with a neighbor.
- Push for specific pages, not general app ideas.

### Slide: Studio task

On the slide:

- Pick one CRUD flow in your capstone.
- Add a product-level detail: validation, summary, empty state, progress, or confirmation.
- Write a GitHub issue that names the user benefit.

Talk points:

- Small, concrete, done in studio time.
- Stand-up: name the flow you will improve and the evidence you will use.

### Slide: Recap

On the slide:

- Don't ship the table. Ship the decision.
- Purpose · Opinionated workflow · Useful states · Trust & feedback · A reason to return.

Talk points:

- Land the lens: CRUD is the skeleton; product is purpose + trust + feedback + a polished main task.

---

## 118 #2 - Choosing Scope: MVP, Nice-to-Have, Impossible-for-Now
Deck: `118/118 #2 - Choosing scope - MVP, nice-to-have, impossible-for-now.html`

Core idea:

Students rarely fail because the idea is too small. They fail because the first version tries to be the whole company.

### Slide 1: Title

Talk points:

- Scope is a design skill, not just project management.
- AI makes it tempting to add features because code appears quickly.
- Opening question: if your demo were tomorrow, what feature would absolutely need to work?

### Slide 2: Why this matters

On the slide:

- Every feature feels equally important, so nothing gets prioritized.
- AI makes advanced features look cheap, so scope grows silently.
- Students build impressive fragments instead of one complete workflow.
- An incomplete advanced feature is worth less than a finished core workflow.

Talk points:

- The first version should prove the app idea with the smallest coherent experience.
- Scope decisions should be written down so students stop renegotiating every class.

### Slide 3: Framework

On the slide:

- Core promise — One sentence: what the app does for the user.
- MVP workflow — Minimum pages & data to prove it.
- Nice-to-have — Polish that matters after the core works.
- Later release — Valuable, but not this class version.
- Cut line — The boundary that protects the deliverable.

Talk points:

- Core promise: the one sentence that explains what the app does.
- MVP workflow: the minimum pages and data needed to prove that promise.
- Cut line: the boundary that protects the final deliverable.

### Slide: Basic / Product / Proof

On the slide:

- Sell products online.
- Catalog, cart, and a simple checkout (pay on pickup).
- Online payments, shipping APIs, multi-vendor, subscriptions.
- “Online payments” is the tempting feature. A pay-on-pickup MVP can still prove the idea.

Talk points:

- Payments sound impressive but bring API keys, webhooks, and compliance.
- Prompt: what is your 'payments' feature — attractive but too expensive right now?

### Slide: Examples

On the slide:

- Store MVP: Browse the catalog, add to cart, place an order.
- Booking MVP: See availability, request a slot, get a confirmation.
- Community MVP: Post, comment, browse the feed.

Talk points:

- These MVPs are small but complete workflows.
- Avoid payments, social login, or recommendation engines too early.

### Slide: AI as a design partner

On the slide:

- Ask AI to estimate implementation risk per feature
- Ask for a smaller version that still teaches the concept
- Compare effort, dependencies, and unknowns
- “What is the smallest version of this feature that still provides user value?”

Talk points:

- AI can help compare effort, dependencies, and unknowns.
- Generated code should be evaluated against the project goal.

### Slide: Discussion prompts

On the slide:

- What feature would you cut if the demo were tomorrow?
- What single workflow proves the app idea?
- What feature sounds easy but needs accounts, APIs, or payment keys?

Talk points:

- Have students answer silently first, then tell a partner what they will cut.

### Slide: Studio task

On the slide:

- Make three columns: Must ship, Should ship, Future release.
- Move at least two features out of Must ship.
- Update the project document with the decision and the reason.

Talk points:

- Stand-up: name one thing you are choosing not to build yet.

### Slide: Recap

On the slide:

- Ship the smallest thing that proves the promise.
- Core promise · MVP workflow · Nice-to-have · Later release · A clear cut line.

Talk points:

- Naming what you will NOT build is a scope skill.

---

## 118 #3 - Scrum: Running Your Capstone Like a Real Project
Deck: `118/118 #3 - Scrum - running your capstone like a real project.html`

Core idea:

Scrum is a lightweight loop: plan a little, build, show it, adjust. You'll run a one-person version all phase.

### Slide 1: Title

Talk points:

- Scrum is not paperwork — it is a loop that keeps work honest.
- We run a lightweight solo version: backlog, sprint goal, stand-up, demo, retro.
- Opening question: what did you actually finish last week?

### Slide 2: Why this matters

On the slide:

- Students plan once, then code for weeks without checkpoints.
- Work drifts to the fun parts, not the demo.
- The last week becomes a panic sprint.
- Short cycles with visible outcomes keep the capstone honest.

Talk points:

- Scrum exists because long invisible stretches of work fail.
- Visible weekly outcomes prevent the demo-week panic.

### Slide 3: Framework

On the slide:

- Product backlog — Everything, ordered by user value.
- Sprint — A short timebox with one clear goal.
- Stand-up — Plan, touchpoint, evidence — daily.
- Review / demo — Show working software, not slides.
- Retrospective — Change one thing about how you work.

Talk points:

- Backlog: ordered by value, not by what is fun to code.
- Sprint: one week works well for the capstone.
- Stand-up: what I will improve, what it touches, what evidence proves it.
- Review: demo working software every week.
- Retro: one improvement to your own process.

### Slide: Basic / Product / Proof

On the slide:

- A to-do list in your head.
- An ordered backlog, a weekly sprint goal, and a Friday demo.
- Every week ends with something you can show.
- A sprint goal is a promise to your future demo — not a wish list.

Talk points:

- The sprint goal is one sentence; the 2-3 backlog items achieve it.
- If everything is the goal, nothing is.

### Slide: Examples

On the slide:

- Store: “A customer can order one product end to end.”
- Booking: “A visitor can request and confirm a slot.”
- Community: “A user can post and get a reply.”

Talk points:

- Goals are vertical slices (page + logic + data), not horizontal layers.
- 'Finish all the models' is not demoable; a working slice is.

### Slide: AI as a design partner

On the slide:

- Ask AI to break a feature into backlog items with acceptance criteria
- Ask it to size items (S/M/L) and flag risky ones
- Don't let AI set your sprint goal — that's a product decision
- The backlog is ordered by user value — not by what is fun to code.

Talk points:

- AI is great at splitting features into small items with acceptance criteria.
- Sizing and risk-flagging help planning; the goal stays yours.

### Slide: Discussion prompts

On the slide:

- What is your sprint goal for this week?
- Which backlog item is riskiest — and is it early or late in the plan?
- What did your last “demo” actually show?

Talk points:

- Ask two students to say their sprint goal aloud in one sentence.

### Slide: Studio task

On the slide:

- Write your backlog (10+ items, ordered by value).
- Pick a one-week sprint goal and mark the 3 items that achieve it.
- Schedule your Friday demo — what will you show, to whom?

Talk points:

- Stand-up connection: name your sprint goal and first backlog item.

### Slide: Recap

On the slide:

- Plan a little. Build. Show it. Adjust.
- Backlog · Sprint goal · Stand-up · Demo · Retro.

Talk points:

- Land the loop: short cycles, visible outcomes, one process improvement at a time.

---

## 118 #4 - User Stories That Actually Guide the Build
Deck: `118/118 #4 - User stories that actually guide the build.html`

Core idea:

A useful user story tells you what page, data, and success condition need to exist. Vague stories only decorate the document.

### Slide 1: Title

Talk points:

- A user story is not paperwork — it should help decide what to build.
- A good story points toward pages, models, validation, and tests.
- Opening question: which story in your document tells you what to build next?

### Slide 2: Why this matters

On the slide:

- Stories describe the app owner, not the user.
- The benefit is generic — “so I can be organized.”
- Without a done condition, the story can't guide coding.
- A good story includes a user type, an action, a benefit, and a testable finish line.

Talk points:

- 'As a user' is usually too broad.
- Good stories include user type, action, benefit, and a testable finish line.

### Slide 3: Framework

On the slide:

- Specific user — Shopper, host, member, admin...
- Concrete action — Search, book, post, filter, reorder.
- Real motivation — Why the user cares right now.
- Data needed — What the app must store or fetch.
- Done condition — How you know it works.

Talk points:

- Specific user: shopper, returning customer, host, moderator.
- Concrete action: search, filter, book, post, reorder.
- Done condition: becomes a manual test checklist.

### Slide: Basic / Product / Proof

On the slide:

- “As a user, I want products so I can shop.”
- “As a returning customer, I want to filter products by category so I can find what I need quickly.”
- List, filter by category, product detail, add to cart.
- The stronger story implies pages, models, and a checklist — categories, filters, details.

Talk points:

- The stronger story implies URLs, a category field, a filtered queryset or filtered state.
- The done condition becomes the manual test.

### Slide: Examples

On the slide:

- Store: Reorder a past purchase without searching again.
- Booking: Cancel or reschedule without calling.
- Community: Find replies to my post since my last visit.

Talk points:

- Each example has a user moment behind it.
- The story should reveal what information matters.

### Slide: AI as a design partner

On the slide:

- Ask AI to rewrite vague stories into testable ones
- Ask it to list pages, models, and edge cases a story implies
- Keep the final wording yours — AI language gets generic
- “What nouns and verbs are missing from this story before it can guide code?”

Talk points:

- AI can sharpen stories, but students keep ownership.
- Use AI output as a draft, not final project voice.

### Slide: Discussion prompts

On the slide:

- Which story in your document is still too broad?
- Can another student tell what page must exist from your story?
- What does “done” mean for each story?

Talk points:

- Pair students; each partner identifies the implied page, model, and done condition.

### Slide: Studio task

On the slide:

- Write three capstone user stories.
- Add a done condition to each.
- Mark one as the demo story for the next class.

Talk points:

- Stand-up: name the story you are building today.

### Slide: Recap

On the slide:

- If it can't point to a page and a done condition, it's decoration.
- Specific user · Concrete action · Real motivation · Data needed · Done condition.

Talk points:

- A story that can't point to a page, data, and a done condition is decoration.

---

## 118 #5 - Wireframes Before Code: Finding UX Problems Early
Deck: `118/118 #5 - Wireframes before code - finding UX problems early.html`

Core idea:

AI can generate pages quickly, but wireframes reveal whether the page order, information hierarchy, and task flow make sense.

### Slide 1: Title

Talk points:

- Wireframes are a thinking tool, not an art assignment.
- They catch UX problems before code becomes expensive to change.
- Opening question: what page in your app is hardest for a new visitor to understand?

### Slide 2: Why this matters

On the slide:

- Students wireframe the page they know how to code, not the one users need.
- Important actions get buried in menus.
- Navigation grows randomly as features are added.
- A sketch is far cheaper to change than a generated page. Find the problem before the code.

Talk points:

- Code-first design follows the data model instead of the user task.
- Navigation should reflect the user journey, not the order features were added.

### Slide 3: Framework

On the slide:

- One page, one job — Many controls, one main purpose.
- Primary action — Visually obvious, not hidden.
- Information hierarchy — Most important info first.
- Navigation path — Follows the user journey.
- State variations — Empty, loading, error, success.

Talk points:

- One page can have many controls but one main job.
- The primary action should be visually obvious.
- State variations include empty, loading, error, success.

### Slide: Basic / Product / Proof

On the slide:

- A table with an add button.
- Table with search, a useful empty state, and a summary at the top.
- A visitor can create, then find the record without explanation.
- The best UI reduces the explanation needed — not just the clicks.

Talk points:

- A table is not automatically useful.
- Search, filters, summaries, and empty states make lists useful.

### Slide: Examples

On the slide:

- Store: Catalog before the analytics dashboard.
- Booking: Next available slot before the full calendar.
- Community: Browse before signup pressure.

Talk points:

- The landing page should match the visitor's immediate need.
- Signup often makes more sense after value is visible.

### Slide: AI as a design partner

On the slide:

- Ask AI to critique a wireframe in words before code
- Ask for missing states: empty, loading, error, success
- Reject a generated page that hides the main action
- “Here is the page's purpose — what is unclear or hard to find?”

Talk points:

- AI can act like a reviewer before it acts like a coder.
- Generated UI is still judged against the wireframe goal.

### Slide: Discussion prompts

On the slide:

- Where does the visitor land first, and why?
- What is the loudest thing on the page?
- What would a first-time visitor do without instructions?

Talk points:

- Show a wireframe to a partner; the partner points to the primary action without explanation.

### Slide: Studio task

On the slide:

- Sketch three key pages.
- Circle the primary action on each.
- Add one alternate state to one page: empty, error, or loading.

Talk points:

- Stand-up: name one page whose layout you will improve today.

### Slide: Recap

On the slide:

- Fail on paper. It's cheaper than failing in code.
- One page, one job · Obvious primary action · Clear hierarchy · Journey-based navigation · All the states.

Talk points:

- A sketch that fails is a cheap failure; a generated page that fails is expensive.

---

## 118 #6 - Usability: Making Your App Effortless
Deck: `118/118 #6 - Usability - making your app effortless.html`

Core idea:

Usability is not decoration. It's whether a first-time visitor can finish the main task without help.

### Slide 1: Title

Talk points:

- Usability = can a first-time visitor finish the main task without help.
- You are not your user — you know too much about your own app.
- Opening question: where do users hesitate in your app?

### Slide 2: Why this matters

On the slide:

- The developer tests only their own happy path.
- Labels, buttons, and flows make sense only to the person who built them.
- Users blame themselves and leave.
- Someone else must be able to finish the task — that is the test.

Talk points:

- Developers know too much: they never get lost in their own app.
- Users who fail blame themselves and quietly leave.

### Slide 3: Framework

On the slide:

- Visible status — Always show what's happening.
- Match the real world — Words users know, not table names.
- Consistency — Same action looks the same everywhere.
- Error prevention — Confirm destructive actions, validate early.
- Recognition over recall — Show options; don't make users remember.

Talk points:

- These are the Nielsen heuristics students can apply immediately.
- Visible status: spinners, confirmations, progress.
- Match real world: 'Your orders', not 'OrderSet list'.
- Error prevention beats good error messages.

### Slide: Basic / Product / Proof

On the slide:

- A form that technically works.
- Plain-language labels, inline validation, a clear primary button, a confirmation.
- A first-time user finishes without asking questions.
- Usability turns “it works” into “it's easy.”

Talk points:

- The form is where student apps lose users.
- Inline validation and a visible primary action fix most of it.

### Slide: Examples

On the slide:

- Store: Can a visitor find a product and check out without help?
- Booking: Is the next available slot obvious?
- Community: Is “post” the loudest action on the page?

Talk points:

- Each domain has one make-or-break usability question.
- Turn a 'no' into the studio task.

### Slide: AI as a design partner

On the slide:

- Ask AI to critique a page against usability heuristics
- Ask for plain-language rewrites of labels and error messages
- Don't accept generic advice — test with a real person
- Watch one person use your app. Don't speak. Where they hesitate is your bug list.

Talk points:

- AI critique is a good first pass; a human test is the real one.
- The hallway test: watch silently, note hesitations.

### Slide: Discussion prompts

On the slide:

- Where do users hesitate in your app?
- Which label only makes sense to you?
- What destructive action has no confirmation?

Talk points:

- Ask students to name one label that is database language, not user language.

### Slide: Studio task

On the slide:

- Watch someone complete your main task — silently.
- Note three friction points.
- Fix one today and screenshot before/after.

Talk points:

- Stand-up: name the friction point you will fix.

### Slide: Recap

On the slide:

- If they need you to explain it, it isn't done.
- Visible status · Real words · Consistency · Error prevention · Recognition over recall.

Talk points:

- Land the lens: usability is measured by a stranger finishing the task.

---

## 118 #7 - Technical Plan: Data, Auth, APIs, and AI Boundaries
Deck: `118/118 #7 - Technical plan - data, auth, APIs, and AI boundaries.html`

Core idea:

A technical plan prevents the project from becoming a pile of generated files. It names what is local, remote, private, and risky.

### Slide 1: Title

Talk points:

- A technical plan is a map students can use when AI suggests changes.
- Clarify data, database, auth, APIs, and risky areas.
- Opening question: where does your app's most important data live?

### Slide 2: Why this matters

On the slide:

- Students choose tools before naming the data flow.
- Auth is added without explaining what data it protects.
- AI-generated files cause architecture drift.
- Auth only earns its place when there is protected data, ownership, or personalization.

Talk points:

- Tool choice should follow product needs.
- Architecture drift: generated code introduces new patterns unnoticed.

### Slide 3: Framework

On the slide:

- Pages — Where users act.
- Models — What the app understands.
- Database — What persists, and where.
- Auth — Who owns the data.
- APIs & services — External dependencies.

Talk points:

- Pages show where users act; models show what the app understands.
- Database: SQLite locally, Postgres in production is the common path.
- APIs & services: payments, email, maps — external dependencies and their failure modes.

### Slide: Basic / Product / Proof

On the slide:

- One Product model in SQLite.
- Users, categories, orders, and media storage.
- Model names match the pages and user stories.
- Models should reflect user stories, not just database convenience.

Talk points:

- If the app has orders, categories, or ownership, the models must support it.
- Good plans make naming and file organization easier.

### Slide: Examples

On the slide:

- Store: Catalog can start in SQLite; payments need external services.
- Booking: Time zones and double-booking need careful model decisions.
- Community: User content needs moderation, media storage, permissions.

Talk points:

- Not every app needs a separate API or SPA.
- External services need failure states and fallbacks.

### Slide: AI as a design partner

On the slide:

- Give AI the architecture map before asking for code
- Ask it to modify one layer at a time: model, view, or template/component
- Track generated areas in an AI usage log for review
- Which one layer is this change touching — and can you explain it after?

Talk points:

- Context improves AI output; small requests reduce unwanted rewrites.
- The AI log helps students defend their decisions.

### Slide: Discussion prompts

On the slide:

- Which data must be protected by auth?
- Which feature forces external services or API keys?
- Where could an external service fail — and what should the page show?

Talk points:

- Have students sketch their data flow in two minutes and star one risk.

### Slide: Studio task

On the slide:

- Label pages, models, database, auth, and external services.
- Mark AI-generated areas of the codebase.
- Add two risks and one fallback plan.

Talk points:

- Stand-up: name one architecture decision you will document or clean up.

### Slide: Recap

On the slide:

- Name it local, remote, private, risky — before the files pile up.
- Pages · Models · Database · Auth · APIs & services.

Talk points:

- Land the lens: name what is local, remote, private, and risky early.

---

## 119 #1 - From Waterfall to Scrum: A Short History of Methodologies
Deck: `119/119 #1 - From waterfall to scrum - a short history of methodologies.html`

Core idea:

Why software teams stopped planning everything upfront — and what agile actually promises.

### Slide 1: Title

Talk points:

- Every methodology is a reaction to a way projects used to fail.
- Goal: students understand WHY the practices exist, not just the rituals.
- Opening question: which 'waterfall habit' do you still have?

### Slide 2: Why this matters

On the slide:

- Methodology becomes paperwork instead of a response to real failures.
- Big upfront plans meet reality and quietly die.
- Teams follow ceremonies without knowing why they exist.
- Every methodology is a reaction to a failure mode. Know the failure it prevents.

Talk points:

- Waterfall failed because requirements change and testing came last.
- Agile is a response, not a religion.

### Slide 3: Framework

On the slide:

- Waterfall · '70s — Plan everything, build once, test last.
- Iterative · '80s&ndash;90s — Build in loops, manage risk (Spiral).
- Agile Manifesto · 2001 — Working software over comprehensive docs.
- Scrum & XP — Sprints, stand-ups, TDD, pair programming.
- Kanban & DevOps — Flow, WIP limits, continuous delivery.

Talk points:

- Waterfall: phases in sequence; change is expensive; testing last is the killer.
- Spiral/iterative: loops and risk management appear.
- 2001 Agile Manifesto: individuals & interactions, working software, customer collaboration, responding to change.
- Scrum & XP operationalize agile; XP brings TDD and pairing.
- Kanban & DevOps: continuous flow and continuous delivery — the world your CI/CD deck lives in.

### Slide: Basic / Product / Proof

On the slide:

- Follow the rituals because the syllabus says so.
- Pick the practices that reduce your project's risk.
- You can explain why each practice you use exists.
- “Working software over comprehensive documentation” — the manifesto in one line.

Talk points:

- Cargo-culting ceremonies wastes solo-capstone time.
- Each practice you keep should map to a risk you actually have.

### Slide: Examples

On the slide:

- Waterfall lesson: Requirements will change — expect it.
- Agile lesson: Demo working software early and often.
- DevOps lesson: Deploy small changes continuously.

Talk points:

- Connect forward: scrum deck (118), TDD deck (this unit), CI/CD and hosting (120).

### Slide: AI as a design partner

On the slide:

- Ask AI to map your project risks to practices that address them
- Ask which agile practices are overkill for a solo capstone
- Don't cargo-cult ceremonies AI suggests — keep what reduces risk
- AI makes code cheap. That makes feedback loops (demos, tests, deploys) more valuable, not less.

Talk points:

- AI shortens build time; the bottleneck moves to validation.
- Fast feedback loops are the enduring lesson of this history.

### Slide: Discussion prompts

On the slide:

- Which “waterfall” habit do you still have?
- What would a one-week iteration of your capstone look like?
- Which agile value matters most for a solo developer?

Talk points:

- Ask for one habit: big-bang integration, testing last, planning everything upfront.

### Slide: Studio task

On the slide:

- One page: cycle length, demo day, and how you track work.
- Adopt one practice from XP or Kanban (TDD, WIP limit, pairing with AI).
- Name the failure mode each practice protects you from.

Talk points:

- Stand-up: name the one practice you adopted and why.

### Slide: Recap

On the slide:

- Methodologies are answers. Know the question.
- Waterfall -> Iterative -> Agile -> Scrum / XP -> Kanban / DevOps.

Talk points:

- Land the lens: keep practices that answer a risk you actually have.

---

## 119 #2 - Login Is Not a Feature: Onboarding and Trust
Deck: `119/119 #2 - Login is not a feature - onboarding and trust.html`

Core idea:

Authentication is a trust moment. Users need to know why the site wants an account and what happens after signing in.

### Slide 1: Title

Talk points:

- Login is not automatically valuable to users.
- Users ask: why do you need this, what happens to my data, what do I get?
- Opening question: does your app truly need login for the first demo?

### Slide 2: Why this matters

On the slide:

- The first page asks for an account before showing value.
- Errors say “failed” instead of explaining recovery.
- No clear logged-out, loading, or signed-in state.
- A login form is technical. Onboarding is product communication.

Talk points:

- Auth has multiple states; each needs a UI.
- Login should lead somewhere meaningful, not a blank dashboard.

### Slide 3: Framework

On the slide:

- Value before account — Show what the site does first.
- Clear promise — Explain what the account enables.
- Recovery path — Failed login leads somewhere helpful.
- Privacy expectation — Say why data is stored.
- Post-login destination — Route to the next useful action.

Talk points:

- Value before account: browsing before signup.
- Recovery path: reset password, helpful errors.
- Post-login destination: route to the next useful action.

### Slide: Basic / Product / Proof

On the slide:

- Email and password form.
- Explain account value, show progress, handle reset, route to the right page.
- A new user understands why signing in matters.
- Handle every path: loading, error, reset, and success — not just the happy one.

Talk points:

- Sessions (Django) or JWT (DRF+React) — either way the states are the same.
- Good auth includes loading, error, reset, success.

### Slide: Examples

On the slide:

- Store: Guest checkout first; an account saves addresses and history.
- Booking: An account keeps appointments and reminders.
- Community: Browse without an account; posting requires one.

Talk points:

- Guest-first flows often demo better.
- Delay signup until the value moment.

### Slide: AI as a design partner

On the slide:

- Ask for better onboarding copy for your exact audience
- Ask for auth state handling (sessions or JWT), check where each state routes
- Never paste auth code without checking security assumptions and settings
- Wrong password · empty fields · expired session · successful login.

Talk points:

- AI writes useful first-draft copy.
- Auth code touches security, settings, and middleware — review carefully.

### Slide: Discussion prompts

On the slide:

- Why does your app need login?
- What can visitors do before creating an account?
- What does the page show after login fails?

Talk points:

- If a student can't answer prompt 1 in one sentence, the app may not need login yet.

### Slide: Studio task

On the slide:

- Improve one auth or onboarding page.
- Add copy that explains value and privacy.
- Test wrong password, empty fields, and successful login.

Talk points:

- Stand-up: name the auth state you will improve.

### Slide: Recap

On the slide:

- Earn trust before you ask for a password.
- Value before account · Clear promise · Recovery path · Privacy expectation · A destination after login.

Talk points:

- Land the lens: earn trust before credentials; route users somewhere meaningful.

---

## 119 #3 - Django Templates, DRF + React, or External APIs?
Deck: `119/119 #3 - Django templates, DRF + React, or external APIs.html`

Core idea:

The stack choice is a product decision. It changes interactivity, complexity, deployment, and demo risk.

### Slide 1: Title

Talk points:

- Students ask which stack is best; the better question is what the app needs.
- Choosing the simpler stack is often the professional decision.
- Opening question: which page truly needs rich interactivity?

### Slide 2: Why this matters

On the slide:

- Choosing a stack because it sounds professional.
- A simple form site gets a full SPA + API it doesn't need.
- Two codebases to debug and deploy instead of one.
- Stack complexity should buy something: interactivity, reuse, or a mobile client.

Talk points:

- A separate API pays off when something else consumes it.
- Two deployments double the demo risk.

### Slide 3: Framework

On the slide:

- Source of truth — Where the real record lives.
- Interactivity need — Which pages must feel instant?
- Accounts & permissions — Sessions or tokens — who owns what?
- API consumers — Does anything else need the data?
- Query complexity — Filters, relationships, reports.

Talk points:

- Interactivity: carts and calendars may justify React.
- API consumers: a mobile app or partner justifies DRF.
- Sessions are simpler than JWT if there is no separate client.

### Slide: Basic / Product / Proof

On the slide:

- Django templates render the catalog.
- Add DRF + React only where interactivity pays for it.
- Stack choice matches the demo story.
- Choosing the simpler stack is often the professional decision.

Talk points:

- Templates can ship a complete product.
- Hybrid is legitimate: templates + a little JS, or React for one page.

### Slide: Examples

On the slide:

- Store: Templates can ship a full store; React makes the cart feel instant.
- Booking: Calendar interactivity may justify React.
- Community: Feeds and forms work fine server-rendered.

Talk points:

- Ask students to name the ONE page that needs interactivity most.

### Slide: AI as a design partner

On the slide:

- Ask AI to compare stacks for your exact user story
- Ask for a decision record, not code first
- Watch for generated code that mixes patterns (fetch in templates, duplicate state)
- What happens on refresh, back button, and slow network in your chosen stack?

Talk points:

- A decision record: choice, alternatives, accepted tradeoff.
- Mixed persistence/state patterns are a common AI mess.

### Slide: Discussion prompts

On the slide:

- What is your source of truth?
- Which page truly needs rich interactivity?
- What breaks if the API and the UI disagree on data shape?

Talk points:

- Ask one templates-stack student and one React student to explain their choice.

### Slide: Studio task

On the slide:

- Name the chosen stack, the rejected alternatives, and the accepted tradeoff.
- Add one manual test: refresh, back button, slow network.
- Put it in the project document.

Talk points:

- Stand-up: name the tradeoff you accept.

### Slide: Recap

On the slide:

- Let the need pick the stack — not the other way around.
- Source of truth · Interactivity · Accounts · API consumers · Query complexity.

Talk points:

- Land the lens: the need picks the stack; complexity must buy something.

---

## 119 #4 - Empty States, Loading States, and Errors
Deck: `119/119 #4 - Empty states, loading states, and errors.html`

Core idea:

Most student apps only design the happy path. Real apps explain what is happening when there is no data, slow data, or bad data.

### Slide 1: Title

Talk points:

- A polished app is not only the version with data already loaded.
- Users spend real time in empty, loading, and error states.
- Opening question: what does your app show when there is no data?

### Slide 2: Why this matters

On the slide:

- Blank pages appear when there is no data.
- Loading feels like the site froze.
- Errors blame the user or give no next step.
- State design is one of the fastest ways to make a student app feel finished.

Talk points:

- Blank pages feel broken even when the code is correct.
- Error messages should help the user recover.

### Slide 3: Framework

On the slide:

- Empty — Invites action — what can happen next.
- Loading — Skeletons and spinners keep confidence.
- Error — What went wrong and what to try.
- Success — Confirm the result, don't annoy.
- Server down — A human 500 page, not a stack trace.

Talk points:

- Empty: teach the app, invite the first action.
- Loading: skeleton loaders read better than spinners for lists.
- Server down: a custom 500/404 page is part of the product.

### Slide: Basic / Product / Proof

On the slide:

- The table shows nothing.
- The empty table explains the value and offers the add action.
- Every state tells the user what happened and what to do next.
- The empty state is often the first experience — a good one can teach the app.

Talk points:

- The empty state is often the first thing a new user sees.
- Generic 'No data' copy is a missed opportunity.

### Slide: Examples

On the slide:

- Store: Empty cart -> “Browse the catalog.”
- Booking: Failed save -> retry and keep the form data.
- Community: No posts -> “Start the first discussion.”

Talk points:

- The best state copy is specific to the product.
- Keep form data on errors — retyping is punishment.

### Slide: AI as a design partner

On the slide:

- Ask AI for state copy in your product voice
- Ask for a state matrix: empty / loading / error / success / down
- Review generated UI for accessibility and contrast
- Every state should be testable — can you trigger it on demand?

Talk points:

- AI generates copy variations well; pick the one that fits your tone.
- Trigger states deliberately: empty DB, throttled network, forced exception.

### Slide: Discussion prompts

On the slide:

- What is your most likely empty state?
- What error would a real user hit first?
- Can users recover without refreshing the page?

Talk points:

- Ask students to list one state they have not implemented; make it today's work item.

### Slide: Studio task

On the slide:

- Add one empty, one loading, and one error state.
- Trigger each deliberately (empty DB, slow network, forced exception).
- Screenshot the improved states for your project document.

Talk points:

- Stand-up: name the missing state you will implement.

### Slide: Recap

On the slide:

- A blank page isn't neutral — it reads as broken.
- Empty invites · Loading reassures · Error recovers · Success confirms · 500 stays human.

Talk points:

- Land the lens: every state tells the user what happened and what to do next.

---

## 119 #5 - How to Use AI Without Breaking Your Architecture
Deck: `119/119 #5 - How to use AI without breaking your architecture.html`

Core idea:

AI is strongest when it receives constraints. It is dangerous when it invents structure, dependencies, and patterns your app does not use.

### Slide 1: Title

Talk points:

- AI can speed development and create invisible complexity.
- The student remains responsible for architecture and testing.
- Opening question: what AI change did you accept but not fully understand?

### Slide 2: Why this matters

On the slide:

- Prompts ask for whole features instead of small changes.
- Generated code adds new folders, models, or packages needlessly.
- Students accept code they cannot explain.
- You stay responsible for architecture and testing — the AI does not.

Talk points:

- Whole-feature prompts produce architecture drift.
- Reject output that does not fit the existing project.

### Slide 3: Framework

On the slide:

- Context — Model, view/component, naming pattern, goal.
- Small request — One behavior at a time.
- Constraints — Tell AI what not to change.
- Review — Read the diff.
- Integrate & test — Run the app and prove it.

Talk points:

- Context: give the model, the view or component, and conventions.
- Constraints: what not to touch (settings, urls, package.json).
- Review the diff before accepting; then run and prove.

### Slide: Basic / Product / Proof

On the slide:

- “Build a store app.”
- “Using this Product model and DRF viewset pattern, add category filtering to this endpoint.”
- The result fits the existing architecture.
- Better prompts name the existing code and set boundaries.

Talk points:

- Works the same for React: name the component, props, and state pattern.
- Better prompts produce code students can explain.

### Slide: Examples

On the slide:

- Store: One chart from existing order data.
- Booking: Validation logic — not business decisions.
- Community: UI states before recommendation algorithms.

Talk points:

- AI can generate validation, formatting, UI states, test cases.
- Avoid prompts that invite new models or packages.

### Slide: AI as a design partner

On the slide:

- Provide file snippets, conventions, and the exact goal
- Ask AI to explain tradeoffs before implementing
- Keep an AI log: prompt, accepted code, manual changes, tests
- Which generated file can you explain line by line?

Talk points:

- Tradeoffs first prevents unnecessary code.
- The AI log makes work transparent and defensible.

### Slide: Discussion prompts

On the slide:

- What is one prompt that caused messy code?
- What project constraint should AI always know?
- Which generated file can you explain line by line?

Talk points:

- Have students rewrite a messy prompt into a constrained one and read both aloud.

### Slide: Studio task

On the slide:

- Rewrite one broad prompt into three small prompts.
- Run one and review the diff.
- Record the result in the AI usage log.

Talk points:

- Stand-up: name the constraint you will include in your next AI prompt.

### Slide: Recap

On the slide:

- Small, constrained, reviewed — or it's drift.
- Context · Small request · Constraints · Review the diff · Integrate and test.

Talk points:

- Land the lens: constrained, small, reviewed — or it is drift you pay for later.

---

## 119 #6 - Test-Driven Development in Django and React
Deck: `119/119 #6 - Test-driven development in Django and React.html`

Core idea:

Write a failing test, make it pass, clean up. TDD turns “it should work” into “here's proof.”

### Slide 1: Title

Talk points:

- TDD: write the failing test first, then the minimum code, then refactor.
- TDD forces you to define 'done' before you code.
- Opening question: which feature would benefit most from a test today?

### Slide 2: Why this matters

On the slide:

- Tests are written last (or never), so they only confirm what exists.
- Refactors and AI edits silently break features.
- Bugs appear at demo time, not development time.
- A failing test first forces you to define “done” before you code.

Talk points:

- Last-minute tests mirror the implementation, bugs included.
- With AI writing more of the code, tests are your control layer.

### Slide 3: Framework

On the slide:

- Red — Write a failing test that defines the behavior.
- Green — Write the minimum code to pass.
- Refactor — Clean up with tests as a safety net.
- Small steps — One behavior per cycle.
- Run often — Every save, every commit.

Talk points:

- Red: the test fails for the right reason.
- Green: minimum code, resist gold-plating.
- Refactor: clean with the net in place.
- Small steps and frequent runs keep the loop honest.

### Slide: Basic / Product / Proof

On the slide:

- Code first, click around to check.
- Failing test -> passing code -> refactor, per behavior.
- The suite catches a regression before you do.
- Each cycle is minutes, not days — the discipline is the small step.

Talk points:

- Show the rhythm live if possible: red, green, refactor in 5 minutes.
- The payoff compounds when AI edits code later.

### Slide: Django: TestCase -> fail -> implement

Talk points:

- Django's test client hits real URLs against a temp database.
- Model logic, views, and forms are all testable without a browser.
- pytest-django is a nicer runner; TestCase works out of the box.

### Slide: React: Testing Library -> fail -> implement

Talk points:

- Testing Library tests behavior the way a user sees it — queries by text and role.
- Test what renders, not implementation details like state variables.
- Vitest for Vite projects, Jest for CRA; the API is nearly identical.

### Slide: AI as a design partner

On the slide:

- Ask AI for the failing test first, then implement yourself
- Ask for edge-case tests per behavior
- Don't let AI write the code and its own passing tests uncritically
- If you can't write the test, you don't know the requirement yet.

Talk points:

- Test-first prompting keeps AI on your requirements.
- AI grading its own homework is the anti-pattern.

### Slide: Discussion prompts

On the slide:

- Which feature would benefit most from a test today?
- What behavior is hard to test — and why?
- What would break silently if you refactored now?

Talk points:

- 'Hard to test' usually means the design couples too many things.

### Slide: Studio task

On the slide:

- Pick one behavior in your capstone.
- Write the failing test (Django or React), make it pass.
- Commit test + code together and note it in your log.

Talk points:

- Stand-up: name the behavior and show the red-to-green commit.

### Slide: Recap

On the slide:

- Red. Green. Refactor.
- Failing test first · Minimum code · Clean up · Small steps · Run often.

Talk points:

- Land the loop: red, green, refactor — in minutes, per behavior.

---

## 119 #7 - Testing AI-Generated Code Before You Believe It
Deck: `119/119 #7 - Testing AI-generated code before you believe it.html`

Core idea:

Generated code often runs before it is correct. Your job is to prove it handles data, errors, and user behavior.

### Slide 1: Title

Talk points:

- Running is only the first test.
- AI code can be plausible and still wrong.
- Opening question: what AI feature has not been tested beyond 'it runs'?

### Slide 2: Why this matters

On the slide:

- A page that loads is treated as feature success.
- Only the perfect input path is tested.
- Refresh and restart behavior are ignored.
- Use the browser like a user, not only like a developer. Tests protect the demo.

Talk points:

- Bugs appear after editing, deleting, refreshing, or bad input.
- Manual checklists protect the final demo.

### Slide 3: Framework

On the slide:

- It runs — Server starts, page loads, no console errors.
- Real scenario — Can a user finish the task?
- Bad input — Empty, invalid, extreme values.
- Persistence — Data survives refresh and server restart.
- Edge cases — Duplicates, long text, injection attempts.

Talk points:

- Persistence: refresh the page, restart the server, check migrations.
- Edge cases come from real user behavior.

### Slide: Basic / Product / Proof

On the slide:

- Add a record and see it in the list.
- Edit, delete, refresh, filter, and invalid form input.
- The checklist catches a bug before demo day.
- A checklist turns vague confidence into evidence.

Talk points:

- Deleting and refreshing are easy tests students skip.
- A feature is not done until the main variants work.

### Slide: Examples

On the slide:

- Store: Zero-quantity items, duplicate slugs, huge prices.
- Booking: Overlapping slots, past dates, time zones.
- Community: Empty posts, very long text, HTML in input.

Talk points:

- HTML in input: check escaping — a classic web bug.
- External APIs must be tested for failure, not just success.

### Slide: AI as a design partner

On the slide:

- Ask AI to generate manual test cases for the feature it wrote
- Ask for edge cases by data type and user behavior
- Don't let AI mark its own work complete without your tests
- “What are the ways this could fail before the demo?”

Talk points:

- AI brainstorms tests well; you run them.
- Ask for 'ways this could fail' before demo day.

### Slide: Discussion prompts

On the slide:

- What does this feature assume is always true?
- What input would embarrass the app during the demo?
- What should happen after a refresh?

Talk points:

- Turn one embarrassing input into a manual test.

### Slide: Studio task

On the slide:

- Pick one AI-generated feature.
- Write a five-step manual test checklist.
- Run it and log at least one fix or confirmation.

Talk points:

- Stand-up: name the feature you will test and one edge case.

### Slide: Recap

On the slide:

- Plausible is not proven.
- It runs · Real scenario · Bad input · Persistence · Edge cases.

Talk points:

- Land the lens: plausible is not proven; the checklist is the evidence.

---

## 119 #8 - Making Store, Booking, and Community Apps Feel Engaging
Deck: `119/119 #8 - Making store, booking, and community apps feel engaging.html`

Core idea:

Engagement is not spam emails. It comes from progress, personalization, useful feedback, and low-friction repetition.

### Slide 1: Title

Talk points:

- Many capstones ask users to enter data repeatedly.
- The question is: what does the app give back?
- Opening question: why would a user come back to your site tomorrow?

### Slide 2: Why this matters

On the slide:

- The app asks users to enter data but gives little back.
- Emails and notifications become noise instead of support.
- Progress is shown as raw history rather than insight.
- Engagement is strongest when the app makes the next action easier.

Talk points:

- Raw history is useful; insight is better.
- Notifications should support goals, not manipulate attention.

### Slide 3: Framework

On the slide:

- Trigger — What brings the user back?
- Easy action — Can they act in seconds?
- Immediate feedback — What changes after the action?
- Visible progress — What pattern can they see?
- Reason to return — What value is promised next?

Talk points:

- Trigger, easy action, feedback, progress, return reason.
- Suggested next actions can be simple and rule-based.

### Slide: Basic / Product / Proof

On the slide:

- Save orders.
- Order status, a one-click reorder, and personalized picks.
- Users know why returning is worth it.
- Storing rows isn't engagement. Users need progress, clarity, or convenience.

Talk points:

- The reorder button is engagement in one click.
- Personalization can start as simple rules.

### Slide: Examples

On the slide:

- Store: Order tracking and easy reorder.
- Booking: Reminders and one-click rebooking.
- Community: Replies, mentions, and fresh content.

Talk points:

- Email/notification tone matters: support, not spam.
- Ask students where engagement could become annoying.

### Slide: AI as a design partner

On the slide:

- Ask AI to design engagement loops, then remove manipulative parts
- Ask for low-pressure email/notification copy
- Use AI for insight wording — but verify calculations yourself
- Where could engagement become annoying or manipulative? Write that boundary down.

Talk points:

- AI generates reward language; students judge whether it is respectful.
- Verify any calculation or trend before showing it.

### Slide: Discussion prompts

On the slide:

- What value does your app return after the user acts?
- What should the app remember about the user?
- Where could engagement become annoying or manipulative?

Talk points:

- Ask each student for one ethical boundary for their app.

### Slide: Studio task

On the slide:

- Design one loop: trigger, action, reward, return reason.
- Add one UI element that shows progress or insight.
- Write one ethical boundary for your engagement design.

Talk points:

- Stand-up: name the engagement loop you will improve.

### Slide: Recap

On the slide:

- Give something back every time the user gives you data.
- Trigger · Easy action · Immediate feedback · Visible progress · A reason to return.

Talk points:

- Land the lens: give value back every time, and keep it respectful.

---

## 120 #1 - Advanced Features Should Improve the Product, Not Just Impress
Deck: `120/120 #1 - Advanced features should improve the product, not just impress.html`

Core idea:

The final phase is not a feature race. Advanced work should make the app more valuable, reliable, or differentiated.

### Slide 1: Title

Talk points:

- Near the end, students want to add something impressive.
- A stable, meaningful feature beats a flashy fragile one.
- Opening question: what advanced feature would actually make your app better?

### Slide 2: Why this matters

On the slide:

- A shiny feature that doesn't support the demo story.
- Advanced work creates bugs in finished flows.
- The feature exists, but the user value is hard to explain.
- Every new feature has an opportunity cost — and can destabilize the main demo.

Talk points:

- Advanced features have opportunity cost.
- If you cannot explain the user value, it may not belong.

### Slide 3: Framework

On the slide:

- User value — What does the user gain?
- Demo impact — Does it strengthen the demo?
- Technical risk — What can break?
- Time cost — What will it replace?
- Fallback plan — What if it fails?

Talk points:

- User value, demo impact, technical risk, time cost, fallback.

### Slide: Basic / Product / Proof

On the slide:

- Add charts because charts look advanced.
- Add the dashboard chart that answers the owner's main question.
- The advanced feature changes a user decision.
- Advanced means more meaningful, not just more complicated.

Talk points:

- Charts are not automatically useful.
- A good advanced feature helps the user decide or act.

### Slide: Examples

On the slide:

- Store: Useful sales trends beat gimmicky animations.
- Booking: Calendar export / reminders may matter more than AI suggestions.
- Community: Better search beats infinite new features.

Talk points:

- The most advanced choice is sometimes a practical one.
- Choose features you can demo confidently.

### Slide: AI as a design partner

On the slide:

- Ask AI to compare candidates by risk and value
- Prototype behind a feature branch
- Don't add features you can't demo reliably
- AI can overpromise feasibility. Preserve the working app before you experiment.

Talk points:

- AI helps with risk analysis but overpromises feasibility.
- Preserve the working app before experimenting.

### Slide: Discussion prompts

On the slide:

- What advanced feature actually improves the product?
- What feature would you remove to protect quality?
- What fallback keeps the demo safe if it fails?

Talk points:

- Have students name one feature they will NOT add.

### Slide: Studio task

On the slide:

- Choose one advanced feature.
- Write its user value, risk, and fallback.
- Create a GitHub issue with acceptance criteria.

Talk points:

- Stand-up: name your fallback plan.

### Slide: Recap

On the slide:

- If it doesn't change a user decision, it isn't advanced.
- User value · Demo impact · Technical risk · Time cost · A fallback plan.

Talk points:

- An advanced feature should change a user decision, with a fallback.

---

## 120 #2 - Performance and Polish: Why Finished Apps Feel Fast
Deck: `120/120 #2 - Performance and polish - why finished apps feel fast.html`

Core idea:

A polished app feels responsive, predictable, and stable — even when the data or network is imperfect.

### Slide 1: Title

Talk points:

- Performance is not only speed; it is also confidence.
- Polish includes spacing, feedback, loading, consistency, responsiveness.
- Opening question: where does your app feel rough even though it works?

### Slide 2: Why this matters

On the slide:

- Students polish colors before fixing rough interaction moments.
- Long tables, images, or API calls block the page.
- Small inconsistencies make the app feel unfinished.
- Performance is not only speed. It is also confidence — users never wondering if it's stuck.

Talk points:

- Interaction polish often matters more than visual polish.
- Slow or uncertain moments break trust.

### Slide 3: Framework

On the slide:

- First load — The page appears fast and clear.
- Navigation — Links and transitions feel predictable.
- Lists & queries — Pagination; no N+1 queries.
- Network — Something useful while data loads.
- Visual consistency — Spacing, fonts, buttons, colors.

Talk points:

- First load: image sizes, bundle size.
- Lists: paginate; watch for N+1 queries in Django (select_related/prefetch_related).
- Network: skeletons and optimistic UI where sensible.

### Slide: Basic / Product / Proof

On the slide:

- The table works with ten rows.
- Still fast with realistic data — paginated, indexed, no N+1 queries.
- The user never wonders if the site is stuck.
- Test with realistic data — not just three sample records.

Talk points:

- Seed realistic data volumes and click through.
- Django Debug Toolbar exposes query counts fast.

### Slide: Examples

On the slide:

- Store: Catalog needs pagination and sized images.
- Booking: The calendar should load without blocking the form.
- Community: Feeds need caching and lazy loading.

Talk points:

- Images are the top student-site performance killer.
- Cache what is expensive and read-heavy.

### Slide: AI as a design partner

On the slide:

- Ask AI where performance risks are in a specific view or component
- Ask for a polish checklist by page
- Verify in browser devtools (Network/Performance), not generic advice
- Focus on visible rough moments — generic optimization can waste time.

Talk points:

- Devtools Network tab and Django Debug Toolbar over guesses.
- Fix the visible rough moment first.

### Slide: Discussion prompts

On the slide:

- Where does your app feel slow or uncertain?
- What visual inconsistency appears on multiple pages?
- What should happen while data loads?

Talk points:

- Two-column list: rough moment and proof of fix.

### Slide: Studio task

On the slide:

- Run the app with realistic sample data.
- Find one rough moment and create a polish issue.
- Fix one query, image, loading, or spacing problem.

Talk points:

- Stand-up: name the rough moment you will fix.

### Slide: Recap

On the slide:

- “Fast” is a feeling: the page is never stuck.
- First load · Navigation · Lists & queries · Network · Visual consistency.

Talk points:

- Fast is a feeling: confidence the page is never stuck.

---

## 120 #3 - CI/CD: Shipping Small Changes Safely
Deck: `120/120 #3 - CI-CD - shipping small changes safely.html`

Core idea:

Continuous integration runs your tests on every push. Continuous deployment ships what passes. Small steps, always releasable.

### Slide 1: Title

Talk points:

- CI runs tests on every push; CD ships what passes.
- The goal is boring deploys: small steps, always releasable.
- Opening question: what does your deploy process look like today?

### Slide 2: Why this matters

On the slide:

- “Big bang” deploys where weeks of changes ship at once.
- Main breaks and nobody knows which commit did it.
- Demo day depends on a manual, fragile deploy.
- If deploying is scary, you deploy less — and it gets scarier.

Talk points:

- Big-bang deploys concentrate risk.
- Small frequent deploys make each one boring.

### Slide 3: Framework

On the slide:

- Commit small — One change per commit / PR.
- Build — Installs and builds cleanly from scratch.
- Test — The suite runs on every push.
- Deploy — Automatic on green, to a real URL.
- Monitor — Know when it breaks.

Talk points:

- Commit small: reviewable, revertable.
- Build from scratch catches 'works on my machine'.
- Deploy on green; monitoring closes the loop.

### Slide: Basic / Product / Proof

On the slide:

- Deploy by dragging files or SSH at midnight.
- Push -> tests run -> auto-deploy on green.
- You can deploy on demo-day morning without fear.
- The pipeline is the gatekeeper — green means shippable.

Talk points:

- The demo-day-morning test: would you dare deploy?
- With CI/CD, deploys stop being events.

### Slide: GitHub Actions: test on every push

Talk points:

- Walk the YAML line by line: trigger, runner, steps.
- React version swaps setup-python for setup-node and the test/build commands.
- PaaS hosts (Render/Railway) can auto-deploy the branch when CI is green.

### Slide: AI as a design partner

On the slide:

- Ask AI to draft the workflow file for your exact stack
- Paste a failing pipeline log and ask why it failed
- Don't merge on red because the code “looks fine”
- A red pipeline is information, not an obstacle. Fix it before merging.

Talk points:

- Workflow YAML is a great AI task — boilerplate with clear intent.
- Failing-log diagnosis is another strong AI use.

### Slide: Discussion prompts

On the slide:

- What does your deploy process look like today?
- What is the smallest change you shipped this week?
- What would you check before merging to main?

Talk points:

- Ask who has deployed this week — and who is afraid to.

### Slide: Studio task

On the slide:

- Add a CI workflow that runs your tests on push.
- Make one PR that goes red, fix it, merge on green.
- Bonus: connect auto-deploy on your host.

Talk points:

- Stand-up: show the green check on your PR.

### Slide: Recap

On the slide:

- Small commits. Green pipeline. Boring deploys.
- Commit · Build · Test · Deploy · Monitor.

Talk points:

- Land the lens: small commits, green pipeline, boring deploys.

---

## 120 #4 - Hosting and Deployment: Servers, Scaling, and Where Your App Lives
Deck: `120/120 #4 - Hosting and deployment - servers, scaling, and where your app lives.html`

Core idea:

From your laptop to a URL users can reach — hosting options, environment config, and how apps scale.

### Slide 1: Title

Talk points:

- Deployment is a feature — plan it early like one.
- Hosting options: PaaS, VPS, static hosting + API.
- Opening question: where will your app live for the final demo?

### Slide 2: Why this matters

On the slide:

- “Works on my machine” is treated as done.
- DEBUG=True, secrets in the repo, SQLite in production.
- The first deploy happens the night before the demo.
- Deployment is a feature. Plan it like one — early.

Talk points:

- Deploy a walking skeleton in week one of the phase.
- Secrets in the repo is the classic student mistake.

### Slide 3: Framework

On the slide:

- Hosting model — PaaS (Render/Railway) vs VPS vs static + API.
- Environment — Env vars; settings per environment; secrets out of the repo.
- Database — Managed Postgres; migrations on deploy.
- Static & media — collectstatic; CDN or bucket for uploads.
- Domain & HTTPS — Custom domain, certificates, ALLOWED_HOSTS.

Talk points:

- PaaS is the capstone default: git push to deploy.
- VPS (gunicorn + nginx) teaches more, costs more time.
- React alone: static hosting (Netlify/Vercel/GitHub Pages).

### Slide: Basic / Product / Proof

On the slide:

- The app runs locally.
- Deployed on a PaaS with env vars, Postgres, and HTTPS.
- A stranger completes the main workflow from a public URL.
- The proof of deployment is a stranger finishing the task on a public URL.

Talk points:

- Seed demo data so the public URL isn't empty.
- Check DEBUG, ALLOWED_HOSTS, and error pages.

### Slide: Examples

On the slide:

- Django app: PaaS (Render / Railway) or a VPS with gunicorn + nginx.
- React app: Static hosting — Netlify, Vercel, GitHub Pages.
- React + API: React on static hosting, Django API on a PaaS — mind CORS.

Talk points:

- CORS bites every React+API student once — warn them early.
- Hosting free tiers change; check current pricing/limits.

### Slide: Vertical vs horizontal scaling

Talk points:

- Vertical: scale up. Horizontal: scale out behind a load balancer.
- Horizontal requires statelessness: sessions in the DB/cache, files in a bucket.
- This is a favorite interview question — make sure they can draw it.

### Slide: AI as a design partner

On the slide:

- Ask AI to compare hosts for your exact stack and budget
- Ask for a deploy checklist for your chosen host
- Verify against the host's current docs — steps and pricing change
- Secrets never go in the repo. Env vars, always.

Talk points:

- AI comparisons are a starting point; hosts change fast.
- The env-var rule has no exceptions.

### Slide: Discussion prompts

On the slide:

- Where will your app live for the final demo?
- What breaks on a fresh database?
- Which settings differ between local and production?

Talk points:

- Fresh-database question surfaces missing migrations and seed data.

### Slide: Studio task

On the slide:

- Deploy any page of your capstone to your chosen host.
- Put the public URL in your README.
- Note the env vars you needed — and confirm none are in the repo.

Talk points:

- Stand-up: share your public URL, even if it is one page.

### Slide: Recap

On the slide:

- If it only runs on your laptop, it isn't shipped.
- Hosting model · Environment · Database · Static files · Domain & HTTPS.

Talk points:

- Land the lens: shipped means a stranger can use it at a public URL.

---

## 120 #5 - Presenting Your Capstone Like a Product, Not Homework
Deck: `120/120 #5 - Presenting your capstone like a product, not homework.html`

Core idea:

The final demo should tell a product story: user problem, solution, build choices, proof, and what you learned.

### Slide 1: Title

Talk points:

- The final presentation is not a tour of every page.
- Show the workflow that proves the app matters.
- Opening question: what is the one workflow your demo must prove?

### Slide 2: Why this matters

On the slide:

- Demos walk through every page instead of one meaningful workflow.
- Technical choices are listed without explaining why.
- Students show features but not proof they work.
- A strong demo has a beginning, middle, and proof — and connects tech to product decisions.

Talk points:

- Evidence: deployed URL, GitHub history, tests, screenshots.
- Technical decisions should connect to product decisions.

### Slide 3: Framework

On the slide:

- Problem — What real issue it addresses.
- User — Who experiences it.
- Workflow — What the app helps them do.
- Technical decision — What you chose, and why.
- Evidence — Deployed URL, tests, history.

Talk points:

- Problem, user, workflow, decision, evidence.
- The deployed URL is FSDI's strongest evidence.

### Slide: Basic / Product / Proof

On the slide:

- “Here is my list, form, edit, and delete.”
- “Here is how a customer finds a product and orders it.”
- Deployed link, demo data, test checklist, and GitHub history support the story.
- A good demo says: here is the problem, here is the action, here is the result.

Talk points:

- Do not demo CRUD as isolated pages; demo the user journey.
- Prepare demo data in advance; avoid live typing.

### Slide: Examples

On the slide:

- Store: A purchase journey end to end.
- Booking: Request -> confirmation -> reminder.
- Community: Post -> reply -> notification.

Talk points:

- One meaningful loop per demo.
- Demo from production; keep localhost as backup.

### Slide: AI as a design partner

On the slide:

- Ask AI to critique the demo script for clarity and pacing
- Ask for likely questions from reviewers or classmates
- Don't let AI write a generic pitch that ignores the real build
- The presentation must match the real app. Practice the hard questions.

Talk points:

- AI tightens the story; the story must match the app.
- Practice technical and product questions.

### Slide: Discussion prompts

On the slide:

- What is the one workflow your demo must prove?
- What technical decision are you proud of, and why?
- What evidence shows the app is more than screenshots?

Talk points:

- Three minutes to draft answers; two students say their demo story aloud.

### Slide: Studio task

On the slide:

- Include problem, flow, technical highlight, test proof, and next release.
- Practice once and cut anything that doesn't support the story.
- Open with the deployed URL on screen.

Talk points:

- Stand-up: name your demo workflow and the evidence you will show.

### Slide: Recap

On the slide:

- Tell a story with proof — not a tour of pages.
- Problem · User · Workflow · Technical decision · Evidence.

Talk points:

- Land the lens: story with proof — problem, workflow, decision, evidence.
