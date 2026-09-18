import fs from 'node:fs/promises';
import {Presentation, PresentationFile} from '@oai/artifact-tool';
import {resolvePresentationFont, finalizePresentation} from '/Users/inxunxa/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations/container_tools/artifact_tool_utils.mjs';
const root='/Volumes/ExSSD/SDGKU/FSDI/2 - Materials';
const build=root+'/.capstone-deck-build';
const skill='/Users/inxunxa/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations';
const font=resolvePresentationFont();
const p=Presentation.create({slideSize:{width:1280,height:720}});
const red='#D23939', ink='#20262D', gray='#5D6670';
function text(s,t,x,y,w,h,size=28,color=ink,bold=false){const a=s.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});a.text=t;a.text.style={typeface:font,fontSize:size,color,bold,autoFit:'none'};return a;}
function slide(title,section){const s=p.slides.add();s.background.fill='#FAF9F6';text(s,section,64,32,1100,28,18,red,true);text(s,title,64,82,1152,100,44,ink,true);text(s,String(p.slides.items.length).padStart(2,'0'),1160,660,60,30,18,gray);return s;}
async function img(s,name,x=610,y=220,w=606,h=404){s.images.add({blob:new Uint8Array(await fs.readFile(root+'/shared/images/'+name)),contentType:'image/png',fit:'contain',position:{left:x,top:y,width:w,height:h},alt:name});}
function notes(s,t){s.speakerNotes.textFrame.setText(t);}
let s=slide('Capstone finish lines','SDGKU  /  FULL-STACK & MOBILE');
text(s,'One project across\nthree courses',64,235,850,175,64,ink,true);
text(s,'118, 119 and 120\nSix classes per course. Eighteen classes in total.',68,467,950,95,28,gray);
notes(s,'Introduce this as the proposed capstone roadmap. Students retain their choice of product and implementation. The shared expectations concern demonstrable outcomes.');
s=slide('Three courses, one growing product','THE ROADMAP');
for(const [i,n,h,b] of [[0,'118','Core idea works','One useful workflow connects\nthe interface to real storage.'],[1,'119','MVP is complete','Someone else can complete\nthe essential user journey.'],[2,'120','Product is ready','A tested release is accessible\nand ready to demonstrate.']]){const x=64+i*400;text(s,n,x,220,350,90,72,red,true);text(s,h,x,343,355,80,32,ink,true);text(s,b,x,450,355,125,27,gray);}
notes(s,'The same capstone continues through all three courses. MVP means minimum viable product: the smallest complete version that delivers the intended user value.');
s=slide('118: The core idea works','COURSE 118  /  CLASSES 1–6');
text(s,'Finish line',64,213,510,40,26,red,true);
text(s,'One small workflow works\nfrom screen to storage.',64,264,520,105,34,ink,true);
text(s,'A user completes a useful action.\nThe app saves and retrieves real data.\nValidation and feedback support the action.',64,401,510,170,27,gray);
await img(s,'118-story-to-page.png');
notes(s,'Evidence: run the app, perform the core action, and show the stored result. Planning and wireframes support the build, but working software is the course finish line. Example: create a booking and reopen it. Authentication is required when the product or program learning outcomes require it. Illustration: shared/images/118-story-to-page.png, generated for this curriculum.');
s=slide('118: A path to the first working workflow','COURSE 118  /  SUGGESTED CHECKPOINTS');
const rows=[['Classes 1–2','Choose the user journey and launch the project.'],['Class 3','Create and retrieve one meaningful record.'],['Class 4','Implement identity and access where needed.'],['Class 5','Connect the complete action and validate input.'],['Class 6','Demonstrate the workflow and revise the scope.']];
rows.forEach(([a,b],i)=>{text(s,a,64,211+i*81,240,50,27,red,true);text(s,b,340,211+i*81,860,64,28,ink);});
notes(s,'Suggested end-of-class targets, adjustable to session length and student preparation. Data storage decisions happen early. An app without accounts should still explain its access model. Check deployment or device installation feasibility early.');
s=slide('119: The MVP is complete','COURSE 119  /  CLASSES 7–12');
text(s,'Finish line',64,213,510,40,26,red,true);
text(s,'Another person completes\nthe essential journey.',64,264,520,105,34,ink,true);
text(s,'Essential features connect.\nEmpty and error states make sense.\nCore tests repeat reliably.\nUser feedback produces an improvement.',64,397,510,190,27,gray);
await img(s,'119-refresh-test.png');
notes(s,'MVP means minimum viable product. Evidence: ask a peer to perform the main journey without coaching. Show normal behavior, an invalid action, and persistence after refresh or restart. Finish with a known-issues list and freeze the essential feature scope. Illustration: shared/images/119-refresh-test.png.');
s=slide('119: A path to a complete MVP','COURSE 119  /  SUGGESTED CHECKPOINTS');
const path119=[['Class 1','Build the next essential part of the user journey.'],['Class 2','Handle empty, loading, error and success states.'],['Class 3','Implement the hardest essential rule or integration.'],['Class 4','Test the core journey and repeat the checks.'],['Class 5','Observe a new user and improve one friction point.'],['Class 6','Demonstrate the MVP and freeze the feature scope.']];
path119.forEach(([a,b],i)=>{text(s,a,64,201+i*72,240,48,27,red,true);text(s,b,340,201+i*72,860,62,28,ink);});
notes(s,'Classes 1–6 within course 119 correspond to overall capstone classes 7–12. These general outcomes apply across web and mobile projects. MVP means minimum viable product. Students choose the implementation and the essential business rule. At the review, a new user should complete the essential journey independently.');
s=slide('120: The product is ready to deliver','COURSE 120  /  CLASSES 13–18');
text(s,'Finish line',64,213,510,40,26,red,true);
text(s,'A tested release that\nothers can access.',64,264,520,105,34,ink,true);
text(s,'Fix serious issues and polish usability.\nRepeat the build and core checks.\nProvide a web link or mobile build.\nDemonstrate results with evidence.',64,397,510,190,27,gray);
await img(s,'120-demo-evidence.png');
notes(s,'Web delivery can be a deployed site. Mobile delivery can be an installable build or an approved testing distribution; public app-store publication is not automatically required. Supply access/setup instructions and known limitations. The final demo explains the user problem, workflow, technical decisions and evidence. Illustration: shared/images/120-demo-evidence.png.');
s=slide('120: A path to a reliable release','COURSE 120  /  SUGGESTED CHECKPOINTS');
const path120=[['Class 1','Fix the most serious issues in the core experience.'],['Class 2','Improve usability, accessibility and perceived speed.'],['Class 3','Make the build and delivery process repeatable.'],['Class 4','Test the release under realistic failure conditions.'],['Class 5','Rehearse the demo with evidence and decisions.'],['Class 6','Deliver the product and reflect on what improved.']];
path120.forEach(([a,b],i)=>{text(s,a,64,201+i*72,240,48,27,red,true);text(s,b,340,201+i*72,860,62,28,ink);});
notes(s,'Classes 1–6 within course 120 correspond to overall capstone classes 13–18. Students should check deployment or installation feasibility earlier. Class 3 makes delivery dependable. Failure conditions depend on the project, for example invalid input, restart, network loss or denied permissions. Delivery can be a deployed website or an installable mobile build with instructions.');
s=slide('Different projects can meet the same standard','EXAMPLES  /  WEB AND MOBILE');
text(s,'A web booking app',64,220,550,50,34,red,true);
text(s,'118   Create and reopen a booking.\n\n119   Complete booking management,\n          with access rules and error handling.\n\n120   Deliver a tested web release\n          with clear access instructions.',64,305,550,290,27,ink);
text(s,'A mobile habit tracker',674,220,550,50,34,red,true);
text(s,'118   Save a habit and retain it after restart.\n\n119   Complete tracking and history,\n          with useful empty and error states.\n\n120   Deliver a tested installable build\n          with clear setup instructions.',674,305,550,290,27,ink);
notes(s,'Illustrative examples, not required project types. Students may choose different stacks and storage solutions. Authentication is conditional on product needs and course requirements. Evaluate the same outcomes while allowing appropriate technical differences.');
s=slide('Evidence at each finish line','COURSE-END DEMONSTRATIONS');
for(const [i,n,h,b] of [[0,'118','Show one action','Run the workflow.\nShow the saved result.\nExplain the next scope decision.'],[1,'119','Let someone use it','Observe the complete journey.\nShow a failure case and a test.\nExplain a feedback-driven change.'],[2,'120','Deliver the product','Share a working release.\nShow repeatable checks.\nExplain decisions and limitations.']]){const x=64+i*400;text(s,n,x,214,350,84,64,red,true);text(s,h,x,335,360,62,31,ink,true);text(s,b,x,432,355,170,25,gray);}
notes(s,'Use working demonstrations for behavior. Screenshots alone do not establish persistence or correctness. These are completion standards, not a proposed grading scheme. If students work in teams, each student should explain a meaningful contribution and the associated technical decisions.');
s=slide('Your capstone finish lines','PLANNING ACTIVITY');
text(s,'118',64,230,190,75,56,red,true);text(s,'By the end of 118, a user can…',285,241,890,70,34,ink);
text(s,'119',64,355,190,75,56,red,true);text(s,'By the end of 119, a new user can complete…',285,366,910,75,34,ink);
text(s,'120',64,480,190,75,56,red,true);text(s,'By the end of 120, I can deliver and prove…',285,491,910,75,34,ink);
notes(s,'Give students five minutes to complete these statements with observable behaviors. Then ask a partner to identify the evidence needed for each. Keep the initial scope small enough to finish. Revisit these statements at each course review.');
await (await PresentationFile.exportPptx(p)).save(build+'/candidate.pptx');
for(let i=0;i<p.slides.items.length;i++){const b=await p.export({slide:p.slides.items[i],format:'png',scale:1});await fs.writeFile(build+`/slide-${i+1}.png`,new Uint8Array(await b.arrayBuffer()));}
const result=await finalizePresentation({workspaceDir:root,candidatePath:build+'/candidate.pptx',finalPath:root+'/presentations/Capstone-Finish-Lines-118-119-120-updated.pptx',pythonExecutable:'/Users/inxunxa/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3',integrityValidatorPath:skill+'/container_tools/inspect_presentation_package_integrity.py',layoutValidatorPath:skill+'/container_tools/inspect_presentation_layout_geometry.py',layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit'],fontPolicy:{basis:'design',families:[font]},verifyArtifactToolImport:true,receiptPath:build+'/validation-updated.json'});
console.log(JSON.stringify(result));
