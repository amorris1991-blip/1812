// ============================================
// GAME STATE
// ============================================
const gameState = {
    studentName: '',
    currentEventIndex: 0,
    resources: {
        troops: { value: 100, max: 100 },
        supplies: { value: 80, max: 80 },
        treasury: { value: 60, max: 60 },
        morale: { value: 50, max: 100 },
        diplomacy: { value: 40, max: 100 }
    },
    quizAnswers: [],
    quizMessage: '',
    currentQuestions: []
  };
  
  // ============================================
  // EVENT DATA - REWRITTEN FOR 8TH GRADERS
  // ============================================
  const events = [
    // EVENT 1: THE CAUSES OF WAR
    {
        id: 1,
        title: "Why America Went to War (1812)",
        reading: [
            "Picture this: You're an American sailor in 1812. You're heading home after months at sea. Suddenly, a British warship pulls alongside your ship. British marines storm aboard with muskets drawn. They grab you and drag you onto their ship, screaming that you're actually a British deserter. You're NOT British. You're American. But they don't care.",
            
            "This is called impressment, and it happened to about 6,000 American sailors. Britain was fighting a massive war against France and needed sailors desperately. So they just took ours. Americans were FURIOUS.",
            
            "But that's not all. Britain also blocked American ships from trading with Europe. American farmers and merchants were going broke. And in the American West, Native American tribes were attacking American settlements with British weapons and support.",
            
            "Young politicians called the \"War Hawks\" were done being pushed around. Leaders like Henry Clay and John C. Calhoun demanded war. They wanted to invade Canada, kick the British out of North America, and prove America was strong.",
            
            "On June 18, 1812, America declared war on the most powerful nation on Earth. But here's the problem: America wasn't ready. The country was divided. Many people opposed the war. The army was tiny and poorly trained. This was going to be rough."
        ],
        whyMatters: "Wars don't just happen randomly. They build up from years of anger, humiliation, and conflict. Understanding WHY the war started helps you see why Americans were willing to fightâ€”even when they weren't ready.",
        
        quizVersions: [
          [
              {
                  question: "What was impressment?",
                  options: [
                      { text: "A tax on ships", correct: false },
                      { text: "When British ships kidnapped American sailors and forced them to serve in the British Navy", correct: true },
                      { text: "A peace treaty", correct: false },
                      { text: "An American law", correct: false }
                  ],
                  funFact: "British captains could literally just POINT at sailors and claim they were British deserters. No proof needed!"
              },
              {
                  question: "Why did Britain impress American sailors?",
                  options: [
                      { text: "To punish America", correct: false },
                      { text: "Because Britain was fighting France and needed more sailors", correct: true },
                      { text: "Because they were bored", correct: false },
                      { text: "To start a war", correct: false }
                  ],
                  funFact: "Britain's war with France lasted over 20 years! They were desperate for sailors and didn't care where they got them."
              },
              {
                  question: "Who were the \"War Hawks\"?",
                  options: [
                      { text: "British soldiers", correct: false },
                      { text: "Native American warriors", correct: false },
                      { text: "Young American politicians who wanted war with Britain", correct: true },
                      { text: "American merchants", correct: false }
                  ],
                  funFact: "Henry Clay became Speaker of the House on his FIRST DAY in Congress. He was only 34 and immediately pushed for war!"
              }
          ],
          [
              {
                  question: "About how many American sailors were impressed by Britain?",
                  options: [
                      { text: "About 600", correct: false },
                      { text: "About 6,000", correct: true },
                      { text: "About 60,000", correct: false },
                      { text: "About 600,000", correct: false }
                  ],
                  funFact: "Some impressed sailors served in the British Navy for YEARS before escaping or being rescued!"
              },
              {
                  question: "What country was Britain fighting when they started impressing American sailors?",
                  options: [
                      { text: "Spain", correct: false },
                      { text: "France", correct: true },
                      { text: "Russia", correct: false },
                      { text: "Germany", correct: false }
                  ],
                  funFact: "Napoleon controlled most of Europe by 1812. Britain was literally fighting for survival against France!"
              },
              {
                  question: "Name one War Hawk politician:",
                  options: [
                      { text: "George Washington", correct: false },
                      { text: "Henry Clay", correct: true },
                      { text: "Benjamin Franklin", correct: false },
                      { text: "Thomas Jefferson", correct: false }
                  ],
                  funFact: "Henry Clay served as Speaker of the House THREE different times and ran for president FIVE times!"
              }
          ],
          [
              {
                  question: "How did impressment make Americans feel?",
                  options: [
                      { text: "Happy", correct: false },
                      { text: "Furious - it violated American freedom", correct: true },
                      { text: "They didn't care", correct: false },
                      { text: "Grateful", correct: false }
                  ],
                  funFact: "Americans had just fought a revolution for freedom 30 years earlier. Having sailors kidnapped felt like Britain was treating them like a colony again!"
              },
              {
                  question: "Why were Native Americans attacking American settlers?",
                  options: [
                      { text: "They had no reason", correct: false },
                      { text: "The British were supplying them with weapons to slow American expansion", correct: true },
                      { text: "Napoleon told them to", correct: false },
                      { text: "They were allied with France", correct: false }
                  ],
                  funFact: "Tecumseh was trying to unite ALL Native tribes from the Great Lakes to the Gulf of Mexico into one confederation!"
              },
              {
                  question: "Why did War Hawks want to invade Canada?",
                  options: [
                      { text: "To make peace", correct: false },
                      { text: "To kick Britain out of North America and expand American territory", correct: true },
                      { text: "To help Native Americans", correct: false },
                      { text: "To surrender", correct: false }
                  ],
                  funFact: "Thomas Jefferson literally said conquering Canada would be 'a mere matter of marching.' He was VERY wrong!"
              }
          ]
      ],
        
        decisionPrompt: "America just declared war, but lots of people think it's a terrible idea. How do you get people to support the war?",
        decisions: [
            {
                id: "A",
                title: "Run newspaper stories about British crimes - get people ANGRY",
                cost: { treasury: 15 },
                effect: { morale: 15, diplomacy: 5 },
                outcome: "Newspapers print dramatic stories about kidnapped sailors and British tyranny. People get fired up. Even some people who opposed the war start to support it. Public anger is powerful.",
                historicalContext: "This actually happened. The government used newspapers to spread stories about British impressment and crimes. It worked pretty well at building support, though New England Federalists still hated the war.",
                analysis: "Smart move. Getting the public angry at the enemy is basic propaganda 101. It worked in 1812 and it still works today."
            },
            {
                id: "B",
                title: "Promise free land to anyone who joins the army",
                cost: { treasury: 20 },
                effect: { troops: 20, morale: 10 },
                outcome: "You promise 160 acres of free land in the West to every soldier who enlists. Farmers and frontiersmen flood recruitment offices. You get soldiers FAST. But it's expensive.",
                historicalContext: "America really did this. They promised soldiers huge chunks of land in the Northwest Territory. It was super effective at getting troops, especially from people who wanted to move west anyway.",
                analysis: "BEST CHOICE. You need troops NOW, and this gets them. Land is cheap (to the government) but valuable to poor farmers. Smart economics."
            },
            {
                id: "C",
                title: "Tell everyone this is a DEFENSIVE war - we're the good guys",
                cost: { treasury: 5 },
                effect: { diplomacy: 15, morale: -5 },
                outcome: "You tell other countries that Britain attacked first and you're just defending yourselves. Some countries believe you. But the War Hawks are MADâ€”they wanted to look tough, not defensive.",
                historicalContext: "Madison tried this angle, saying Britain forced the war. Problem was, America declared war and invaded Canada first. Hard to look defensive when you're the one invading.",
                analysis: "Weak sauce. Other countries aren't stupid. America declared war and invaded. Pretending to be the victim just makes you look dishonest."
            }
        ]
    },
    
    // EVENT 2: INVASION OF CANADA
    {
        id: 2,
        title: "The Detroit Disaster (1812)",
        reading: [
            "\"Conquering Canada will be a piece of cake,\" American leaders said. \"They barely have any soldiers. We'll just march in and take it.\" Canada had only 5,000 British troops. America could raise tens of thousands of militia. Easy win, right?",
            
            "Wrong. SO wrong.",
            
            "General William Hull was 59 years old and terrified of everything. He led 2,000 American troops into Canada near Detroit. At first, things seemed okay. Then Hull heard that a legendary Native American warrior named Tecumseh had joined the British. Hull started panicking.",
            
            "The British commander, General Isaac Brock, was smart. He only had 1,300 troops (including 600 Native warriors with Tecumseh), but he knew how to scare Hull. Brock sent Hull a message: \"Surrender now, or I can't control what Tecumseh's warriors will do to your soldiers and the civilians in Detroit.\"",
            
            "Hull was TERRIFIED. He was so scared that on August 16, 1812, he surrendered Detroit without even fighting. Not one shot fired. His own officers wanted to punch him. America's first invasion of Canada was a complete humiliation.",
            
            "The entire nation was shocked. How could a general with MORE troops surrender without fighting? It was the worst possible start to the war."
        ],
        whyMatters: "This shows that having more soldiers doesn't guarantee victory. Leadership, courage, and psychology matter just as much as numbers. One terrified general can ruin everything.",
        
        quizVersions: [
            [
                {
                    question: "Why did Americans think conquering Canada would be easy?",
                    options: [
                        { text: "Canada wanted to join America", correct: false },
                        { text: "Canada only had about 5,000 British troops defending it", correct: true },
                        { text: "France promised to help", correct: false },
                        { text: "Britain had already surrendered", correct: false }
                    ]
                },
                {
                    question: "What was General Hull's biggest problem?",
                    options: [
                        { text: "He was too young", correct: false },
                        { text: "He was too aggressive", correct: false },
                        { text: "He was terrified and panicked easily", correct: true },
                        { text: "He refused orders", correct: false }
                    ]
                },
                {
                    question: "Who was Tecumseh?",
                    options: [
                        { text: "A British general", correct: false },
                        { text: "An American hero", correct: false },
                        { text: "A legendary Native American warrior who fought with the British", correct: true },
                        { text: "The Canadian governor", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "How many troops did Hull have?",
                    options: [
                        { text: "About 200", correct: false },
                        { text: "About 2,000", correct: true },
                        { text: "About 20,000", correct: false },
                        { text: "None", correct: false }
                    ]
                },
                {
                    question: "How many troops did Brock have when he scared Hull into surrendering?",
                    options: [
                        { text: "About 1,300", correct: true },
                        { text: "About 13,000", correct: false },
                        { text: "About 500", correct: false },
                        { text: "More than Hull", correct: false }
                    ]
                },
                {
                    question: "When did Hull surrender Detroit?",
                    options: [
                        { text: "June 18, 1812", correct: false },
                        { text: "August 16, 1812", correct: true },
                        { text: "December 1814", correct: false },
                        { text: "January 1815", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "How did Brock trick Hull into surrendering?",
                    options: [
                        { text: "He threatened that Tecumseh's warriors might attack civilians", correct: true },
                        { text: "He offered Hull money", correct: false },
                        { text: "He didn't trick him", correct: false },
                        { text: "He showed fake reinforcements", correct: false }
                    ]
                },
                {
                    question: "What does Hull's surrender teach us about war?",
                    options: [
                        { text: "Numbers always win", correct: false },
                        { text: "Leadership and courage matter as much as troop strength", correct: true },
                        { text: "You should always surrender", correct: false },
                        { text: "Native warriors were invincible", correct: false }
                    ]
                },
                {
                    question: "How many shots did Hull's army fire before surrendering?",
                    options: [
                        { text: "Hundreds", correct: false },
                        { text: "A few", correct: false },
                        { text: "ZERO - he surrendered without fighting", correct: true },
                        { text: "Thousands", correct: false }
                    ]
                }
            ]
        ],
        
        decisionPrompt: "Hull is begging for help at Detroit. Reports are confusing. What do you do?",
        decisions: [
            {
                id: "A",
                title: "Send reinforcements NOW - we can save Detroit!",
                cost: { troops: 30, supplies: 20 },
                effect: { morale: 0 },
                outcome: "",
                random: {
                    chance: 0.4,
                    success: {
                        effect: { morale: 5 },
                        outcome: "Your troops arrive JUST in time. Hull is still scared, but with backup, he holds Detroit. Barely. Crisis avoidedâ€”but Hull is still a terrible general."
                    },
                    failure: {
                        effect: { morale: -15 },
                        outcome: "Too late. By the time your troops arrive, Hull already surrendered. Now your reinforcements are captured too. You just made it WORSE."
                    }
                },
                historicalContext: "Hull got basically no help. He was alone, scared, and gave up. If reinforcements had arrived in time, maybe he would've held. But probably notâ€”Hull was a coward.",
                analysis: "Risky gamble. Hull's the problem, not the troop numbers. Even with reinforcements, a cowardly general will find a way to lose."
            },
            {
                id: "B",
                title: "Don't waste resources on Hull - let him deal with it",
                cost: {},
                effect: { morale: -20, treasury: 10 },
                outcome: "You ignore Hull's pleas. He panics and surrenders Detroit without a fight. The nation is FURIOUS and humiliated. But hey, at least you saved some money and troops.",
                historicalContext: "This is basically what happened. Hull got no help and surrendered shamefully. It was a massive embarrassment but didn't end the war.",
                analysis: "Cold but practical. Hull was going to fail anyway. Better to save resources than throw good money after bad. But the morale hit HURTS."
            },
            {
                id: "C",
                title: "Try to negotiate with Tecumseh - maybe we can make a deal?",
                cost: { treasury: 25, diplomacy: 10 },
                effect: { morale: 15, troops: -10 },
                outcome: "You offer Tecumseh recognition of Native lands if he stays neutral. He thinks about it... but refuses. He's loyal to Britain. Still, some warriors sit out the fight, so it helps a little.",
                historicalContext: "America never seriously tried this. The whole point was to EXPAND, not recognize Native territory. Tecumseh knew America was his enemy, which is why he sided with Britain.",
                analysis: "BEST IDEA strategically, but politically impossible. Breaking the British-Native alliance would've been huge. But Americans wanted land, not peace with Natives."
            }
        ]
    },
    
    // EVENT 3: NAVAL VICTORIES
    {
        id: 3,
        title: "Old Ironsides Strikes Back (1812)",
        reading: [
            "After the Detroit disaster, Americans needed SOMETHING to celebrate. And then the Navy came through.",
            
            "Britain had over 600 warships. The biggest, most powerful navy on Earth. America? Just 16 ships. Nobody expected America to win a single naval battle.",
            
            "But American ships were different. They were FAST. And they packed WAY more cannons than similar British ships. On August 19, 1812, the USS Constitution spotted a British frigate called HMS Guerriere.",
            
            "For 30 minutes, the two ships blasted each other with cannons. But American gunners were better trained. Constitution's thick wooden hull was so strong that British cannonballs literally bounced off. Sailors started calling her \"Old Ironsides.\" Guerriere was torn to pieces and surrendered.",
            
            "More victories followed. USS United States captured HMS Macedonian. Constitution destroyed HMS Java. Each time, newspapers went CRAZY. Finally, something to brag about!",
            
            "These victories didn't change the fact that Britain still controlled the seas. But they proved America could fight. They gave people hope. And they seriously embarrassed the Royal Navy."
        ],
        whyMatters: "Sometimes morale matters more than strategy. These naval wins didn't change the war's big picture, but they gave Americans the confidence to keep fighting after Detroit's humiliation.",
        
        quizVersions: [
            [
                {
                    question: "How did USS Constitution get the nickname 'Old Ironsides'?",
                    options: [
                        { text: "It was made of iron", correct: false },
                        { text: "British cannonballs bounced off its thick wooden hull", correct: true },
                        { text: "It was the oldest ship", correct: false },
                        { text: "The captain was tough", correct: false }
                    ]
                },
                {
                    question: "How many warships did America have at the start of the war?",
                    options: [
                        { text: "Over 200", correct: false },
                        { text: "About 100", correct: false },
                        { text: "Just 16", correct: true },
                        { text: "None", correct: false }
                    ]
                },
                {
                    question: "Why were these naval victories important?",
                    options: [
                        { text: "They ended the war", correct: false },
                        { text: "They gave Britain control", correct: false },
                        { text: "They didn't matter", correct: false },
                        { text: "They gave Americans hope and confidence after Detroit", correct: true }
                    ]
                }
            ],
            [
                {
                    question: "How many warships did Britain have?",
                    options: [
                        { text: "About 60", correct: false },
                        { text: "About 160", correct: false },
                        { text: "Over 600", correct: true },
                        { text: "Just 16", correct: false }
                    ]
                },
                {
                    question: "How long did the Constitution vs. Guerriere battle last?",
                    options: [
                        { text: "About 30 minutes", correct: true },
                        { text: "3 hours", correct: false },
                        { text: "3 days", correct: false },
                        { text: "30 seconds", correct: false }
                    ]
                },
                {
                    question: "Which British ship did USS United States capture?",
                    options: [
                        { text: "HMS Guerriere", correct: false },
                        { text: "HMS Macedonian", correct: true },
                        { text: "HMS Java", correct: false },
                        { text: "HMS Victory", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "Why could American ships beat British ships even though they were outnumbered?",
                    options: [
                        { text: "American ships were faster and had more cannons", correct: true },
                        { text: "British sailors were cowards", correct: false },
                        { text: "American ships were made of iron", correct: false },
                        { text: "Magic", correct: false }
                    ]
                },
                {
                    question: "Did these victories give America control of the ocean?",
                    options: [
                        { text: "Yes - America now ruled the seas", correct: false },
                        { text: "No - Britain still had way more ships, but Americans proved they could fight", correct: true },
                        { text: "Britain surrendered control", correct: false },
                        { text: "Neither side controlled it", correct: false }
                    ]
                },
                {
                    question: "How did Britain react to these losses?",
                    options: [
                        { text: "They laughed it off", correct: false },
                        { text: "They were shocked and started taking America seriously", correct: true },
                        { text: "They immediately surrendered", correct: false },
                        { text: "They didn't care", correct: false }
                    ]
                }
            ]
        ],
        
        decisionPrompt: "Your naval captains want to keep hunting British warships. What do you tell them?",
        decisions: [
            {
                id: "A",
                title: "KEEP ATTACKING! Press the advantage!",
                cost: { supplies: 15, treasury: 10 },
                effect: { morale: 20, diplomacy: 10 },
                outcome: "American ships keep winning. More British ships captured or destroyed. Newspapers call it a miracle. Even European countries start to respect America. Britain's merchants are FURIOUS at their own navy.",
                historicalContext: "This is what happened. America kept sending its few ships to hunt British vessels. The wins kept coming and morale stayed high. Best use of a small navy ever.",
                analysis: "PERFECT CHOICE. You're outnumbered 600 to 16, so you can't play defense. Attack, win dramatic victories, and make it hurt psychologically. Brilliant."
            },
            {
                id: "B",
                title: "Protect our merchant ships instead",
                cost: { supplies: 10 },
                effect: { treasury: 15, morale: 5, diplomacy: -5 },
                outcome: "You use the Navy to guard American trading ships. Trade increases, money rolls in. But it's boring. No dramatic victories. Other countries see it as weak and defensive.",
                historicalContext: "With only 16 ships, America couldn't effectively protect merchant vessels against 600 British warships. Britain's blockade strangled trade anyway.",
                analysis: "Boring and ineffective. Can't guard all your merchants with 16 ships. Better to attack and win spectacular battles than spread yourself thin."
            },
            {
                id: "C",
                title: "Build more ships for the future",
                cost: { treasury: 30, supplies: 15 },
                effect: { troops: 10, morale: 10 },
                outcome: "Shipyards start building new warships. Problem: they take MONTHS to build. Most won't be ready until the war is over. Long-term thinking... but not helpful NOW.",
                historicalContext: "Congress authorized new ships, but most weren't finished until 1815-1816, AFTER the war ended. Building ships takes forever.",
                analysis: "Too slow. The war won't wait 18 months for your new ships. Use what you have NOW aggressively rather than planning for a future that might not come."
            }
        ]
    },
    
    // EVENT 4: LAKE ERIE
    {
        id: 4,
        title: "Perry's Impossible Victory (1813)",
        reading: [
          "Here's your mission: Build a fleet of warships from scratch in the middle of nowhere, with almost no experienced sailors, and then defeat the British navy on Lake Erie. Oh, and you're 27 years old. Good luck.",
      
          "That's what they told Oliver Hazard Perry. And somehow, he DID it.",
          
          "Perry and his men cut down trees in Pennsylvania and built ships by hand. They had almost no real sailors, so Perry recruited anyone who would fight: farmers, free Black sailors, even Kentucky militiamen who'd never SEEN a big lake before.",
          
          "On September 10, 1813, Perry's fleet of nine ships met six British warships near an island called Put-in-Bay. The battle was BRUTAL. Perry's flagship, USS Lawrence, got absolutely DESTROYED. 80% of his crew were killed or wounded.",
          
          "Most commanders would've surrendered. Not Perry. He grabbed his battle flagâ€”which said \"DON'T GIVE UP THE SHIP\"â€”and had himself rowed through British gunfire to another ship, USS Niagara. He took command and led a devastating attack. The British surrendered.",
          
          "Perry sent a message to General Harrison: \"We have met the enemy and they are ours.\" With Lake Erie under American control, the British had to abandon Detroit and retreat into Canada. The Northwest Territory was finally secure."
        ],
        whyMatters: "This was the war's turning point. It showed that determination and courage can overcome terrible odds. It also cut off British support to Native Americans, changing the entire war.",
        
        quizVersions: [
            [
                {
                    question: "Why was controlling Lake Erie important?",
                    options: [
                        { text: "Good fishing", correct: false },
                        { text: "Control of the lake meant you could move troops and supplies and threaten enemy territory", correct: true },
                        { text: "It was pretty", correct: false },
                        { text: "It had gold", correct: false }
                    ]
                },
                {
                    question: "What made Perry's fleet so unusual?",
                    options: [
                        { text: "It was built from scratch with inexperienced crews", correct: true },
                        { text: "It used steam engines", correct: false },
                        { text: "It was made of iron", correct: false },
                        { text: "It was the biggest fleet ever", correct: false }
                    ]
                },
                {
                    question: "What was Perry's famous message after winning?",
                    options: [
                        { text: "\"Give me liberty or give me death\"", correct: false },
                        { text: "\"We have met the enemy and they are ours\"", correct: true },
                        { text: "\"Don't shoot\"", correct: false },
                        { text: "\"I quit\"", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "How old was Perry when he won this battle?",
                    options: [
                        { text: "Just 27", correct: true },
                        { text: "47", correct: false },
                        { text: "67", correct: false },
                        { text: "17", correct: false }
                    ]
                },
                {
                    question: "What percentage of Perry's crew on USS Lawrence were killed or wounded?",
                    options: [
                        { text: "About 20%", correct: false },
                        { text: "About 50%", correct: false },
                        { text: "About 80%", correct: true },
                        { text: "None", correct: false }
                    ]
                },
                {
                    question: "How many American ships fought in this battle?",
                    options: [
                        { text: "Three", correct: false },
                        { text: "Six", correct: false },
                        { text: "Nine", correct: true },
                        { text: "Twenty", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "What did Perry do when his ship was destroyed?",
                    options: [
                        { text: "Surrendered", correct: false },
                        { text: "Grabbed his flag and rowed through enemy fire to take command of another ship", correct: true },
                        { text: "Swam away", correct: false },
                        { text: "Gave up", correct: false }
                    ]
                },
                {
                    question: "What happened after America won control of Lake Erie?",
                    options: [
                        { text: "Nothing changed", correct: false },
                        { text: "The British had to abandon Detroit and retreat into Canada", correct: true },
                        { text: "The war ended", correct: false },
                        { text: "Britain got stronger", correct: false }
                    ]
                },
                {
                    question: "What does Perry's victory teach us?",
                    options: [
                        { text: "Always give up when things look bad", correct: false },
                        { text: "Courage and determination can overcome terrible odds", correct: true },
                        { text: "Only experienced sailors can win", correct: false },
                        { text: "Numbers always win", correct: false }
                    ]
                }
            ]
        ],
        
        decisionPrompt: "You won Lake Erie! British forces are running away into Canada. Chase them or stay put?",
        decisions: [
            {
                id: "A",
                title: "CHASE THEM! Don't let them escape!",
                cost: { troops: 25, supplies: 20 },
                effect: { morale: 15, diplomacy: -5 },
                outcome: "",
                random: {
                    chance: 0.6,
                    success: {
                        effect: { morale: 20 },
                        outcome: "General Harrison catches the British at the Thames River and DESTROYS them. Tecumseh dies in the battle. The Northwest is yours! Your aggressive chase paid off big time."
                    },
                    failure: {
                        effect: { supplies: -10 },
                        outcome: "Your troops chase the British into the wilderness and get LOST. Winter is coming. You have to retreat with heavy losses. The British escaped."
                    }
                },
                historicalContext: "This actually happened. Harrison chased the British and crushed them at the Battle of the Thames. Tecumseh died, ending Native resistance. Aggressive pursuit = total victory.",
                analysis: "BEST CHOICE. When the enemy is running scared, CHASE THEM. Don't give them time to regroup. Harrison's pursuit ended the threat in the Northwest permanently."
            },
            {
                id: "B",
                title: "Secure what we've won - build forts around the lake",
                cost: { supplies: 10, treasury: 15 },
                effect: { morale: 10, diplomacy: 5, troops: 5 },
                outcome: "You build strong forts around Lake Erie. The British can't take it back. You've secured the region permanently. Safe, but you missed the chance to destroy them completely.",
                historicalContext: "Some commanders wanted to play it safe. But letting the British escape meant they could regroup and cause problems later.",
                analysis: "Too cautious. The British were vulnerable and running. Fortifying is smart eventually, but first you need to DESTROY the enemy army."
            },
            {
                id: "C",
                title: "Raid Canadian towns for supplies",
                cost: { supplies: 15 },
                effect: { morale: 10, treasury: 20, diplomacy: -10 },
                outcome: "Your ships raid Canadian settlements and steal supplies. You get food and ammunition, but Canadian civilians HATE you now. Other countries say you're being brutal.",
                historicalContext: "Some raiding happened, but it mostly just made Canadians angrier and didn't accomplish much strategically.",
                analysis: "Dumb move. Raiding civilians gets you some supplies but makes enemies and looks terrible. Better to destroy the British ARMY than steal from farmers."
            }
        ]
    },
    
    // EVENT 5: BURNING OF WASHINGTON
    {
        id: 5,
        title: "Washington Burns (1814)",
        reading: [
            "Bad news: Britain just defeated Napoleon in Europe. Now thousands of battle-hardened British veterans are sailing to America. Very bad news.",
            
            "On August 19, 1814, 4,500 British troops land in Maryland and march toward Washington D.C. President Madison thinks they're going to attack Baltimore instead. He's WRONG.",
            
            "America quickly assembles 7,000 militia to stop the British at Bladensburg, just outside Washington. On paper, the Americans have more troops. In reality? These militia have barely any training.",
            
            "The British attack. The militia fire their muskets once... maybe twice... and then PANIC. They drop their weapons and RUN. The British barely have to fightâ€”they're just watching Americans sprint away in terror. People started calling it the \"Bladensburg Races\" like it was a joke. It wasn't funny.",
            
            "The British march into Washington unopposed. President Madison and the government flee the city. First Lady Dolley Madison grabs a portrait of George Washington and escapes just in time.",
            
            "The British burn the Capitol, the White House, and other government buildings. They're getting revenge for Americans burning York (Toronto) earlier in the war. After 26 hours, a massive thunderstorm puts out the fires. The British leave.",
            
            "America's capital is in ruins. The nation is humiliated. This is the war's darkest moment."
        ],
        whyMatters: "Sometimes you hit rock bottom. But what matters is how you respond. The burning of Washington could have ended the war in defeat. Instead, it made Americans FURIOUS and determined to fight harder.",
        
        quizVersions: [
            [
                {
                    question: "Why was Washington so poorly defended?",
                    options: [
                        { text: "There were no soldiers", correct: false },
                        { text: "President Madison thought the British would attack Baltimore instead", correct: true },
                        { text: "Nobody cared about Washington", correct: false },
                        { text: "It was a trap", correct: false }
                    ]
                },
                {
                    question: "What were the \"Bladensburg Races\"?",
                    options: [
                        { text: "An actual horse race", correct: false },
                        { text: "When American militia panicked and ran away from the British", correct: true },
                        { text: "A British victory parade", correct: false },
                        { text: "A celebration", correct: false }
                    ]
                },
                {
                    question: "Why did the British burn Washington?",
                    options: [
                        { text: "They were trying to destroy all American cities", correct: false },
                        { text: "Revenge for Americans burning York (Toronto)", correct: true },
                        { text: "They were cold", correct: false },
                        { text: "It was an accident", correct: false }
                    ]
                },
                {
                    question: "Who saved George Washington's portrait from the White House?",
                    options: [
                        { text: "President Madison", correct: false },
                        { text: "British soldiers", correct: false },
                        { text: "First Lady Dolley Madison", correct: true },
                        { text: "Nobody", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "How many British troops attacked Washington?",
                    options: [
                        { text: "About 450", correct: false },
                        { text: "About 4,500", correct: true },
                        { text: "About 45,000", correct: false },
                        { text: "About 100", correct: false }
                    ]
                },
                {
                    question: "How many American militia tried to defend Washington?",
                    options: [
                        { text: "About 700", correct: false },
                        { text: "About 7,000", correct: true },
                        { text: "None", correct: false },
                        { text: "About 700,000", correct: false }
                    ]
                },
                {
                    question: "How long were the British in Washington?",
                    options: [
                        { text: "26 minutes", correct: false },
                        { text: "26 hours", correct: true },
                        { text: "26 days", correct: false },
                        { text: "26 years", correct: false }
                    ]
                },
                {
                    question: "What stopped the fires in Washington?",
                    options: [
                        { text: "American troops", correct: false },
                        { text: "A massive thunderstorm", correct: true },
                        { text: "The British put them out", correct: false },
                        { text: "Snow", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "Why did the militia run away even though they outnumbered the British?",
                    options: [
                        { text: "They were untrained, scared, and panicked under fire", correct: true },
                        { text: "They were ordered to retreat", correct: false },
                        { text: "They ran out of bullets", correct: false },
                        { text: "The British had magic powers", correct: false }
                    ]
                },
                {
                    question: "What does the burning of Washington show about the war in 1814?",
                    options: [
                        { text: "America was winning easily", correct: false },
                        { text: "Britain was now sending veteran troops and taking the offensive", correct: true },
                        { text: "The war was almost over", correct: false },
                        { text: "Nobody wanted to fight anymore", correct: false }
                    ]
                },
                {
                    question: "Did burning Washington break American will to fight?",
                    options: [
                        { text: "Yes - Americans gave up", correct: false },
                        { text: "No - it made Americans FURIOUS and more determined", correct: true },
                        { text: "It had no effect", correct: false },
                        { text: "America surrendered immediately", correct: false }
                    ]
                }
            ]
        ],
        
        decisionPrompt: "Washington is in ashes. Everyone's humiliated and angry. What now?",
        decisions: [
            {
                id: "A",
                title: "Rally the nation - turn this into a war cry!",
                cost: { treasury: 20 },
                effect: { morale: 15, diplomacy: 10 },
                outcome: "\"REMEMBER WASHINGTON!\" becomes the battle cry. People are FURIOUS at the British. Volunteers flood recruitment offices. The British brutality backfiredâ€”you're stronger now, not weaker.",
                historicalContext: "This is what happened. Instead of breaking American spirit, burning the capital made people mad and united them. Even Federalists who opposed the war started supporting it.",
                analysis: "PERFECT RESPONSE. Never waste a crisis. When the enemy does something brutal, use it to fuel your people's anger. British burned your capital? Make them regret it."
            },
            {
                id: "B",
                title: "Beg Britain for peace NOW",
                cost: {},
                effect: { morale: -25, diplomacy: 20, treasury: 30 },
                outcome: "You send desperate peace offers to Britain. Negotiations speed up, but Americans think you're a coward. War Hawks want to kick you out of office. Maybe the war ends sooner... but at what cost to your reputation?",
                historicalContext: "Peace talks were already happening, but showing desperation after Washington burned would've been political suicide and encouraged Britain to demand harsh terms.",
                analysis: "TERRIBLE IDEA. Negotiating from weakness gets you a bad deal. Better to rally your people, win some battles, THEN negotiate from strength."
            },
            {
                id: "C",
                title: "Burn Canadian towns in revenge",
                cost: { troops: 20, supplies: 25 },
                effect: { morale: 10, diplomacy: -15 },
                outcome: "American troops burn Canadian settlements along the border. Feels like justice. But European countries call you barbaric. Canadians HATE you. The war gets uglier and more bitter.",
                historicalContext: "America had already burned York, which is WHY Britain burned Washington. More revenge burning just escalated the brutality without helping militarily.",
                analysis: "Emotional but stupid. Revenge feels good but accomplishes nothing. You waste resources burning civilians' homes instead of fighting the British army."
            },
            {
                id: "D",
                title: "Fortify Baltimore - that's the next target",
                cost: { troops: 15, supplies: 20, treasury: 10 },
                effect: { morale: 5 },
                outcome: "You rush troops to Baltimore and start building defenses. Earthworks, cannons, reinforcements for Fort McHenry. If the British attack, they'll find you READY this time.",
                historicalContext: "This is exactly what happened. American commanders correctly predicted Baltimore was next and prepared strong defenses. It led to one of the war's most important victories.",
                analysis: "SMART MOVE. Learn from your mistakes. Washington fell because you were unprepared. Don't let it happen twice. Baltimore's defense becomes legendary."
            }
        ]
    },
    
    // EVENT 6: FORT MCHENRY
    {
        id: 6,
        title: "The Rockets' Red Glare (1814)",
        reading: [
            "After burning Washington, the British head to Baltimore. This is the BIG prizeâ€”a rich port city and the home base of American privateers (basically legal pirates) who've been destroying British merchant ships.",
            
            "To capture Baltimore, the British need to take Fort McHenryâ€”a star-shaped fort guarding the harbor. About 1,000 American soldiers are inside. Major Armistead, the fort's commander, orders a HUGE American flag madeâ€”30 feet by 42 feet. He wants the British to see it clearly.",
            
            "On September 13, 1814, British warships start blasting Fort McHenry with rockets and bombs. For 25 HOURS straight, explosions rain down. Up to 1,800 bombs hit the fort. Americans can barely fire backâ€”the British ships stay out of range of the fort's cannons.",
            
            "A lawyer named Francis Scott Key is stuck on a British ship watching the battle. All night long, he sees rockets lighting up the sky. But he can't tell who's winning through all the smoke.",
            
            "Then dawn breaks on September 14. The smoke clears. And that MASSIVE American flag is still flying over Fort McHenry. The British failed.",
            
            "Key is so moved that he writes a poem called \"Defence of Fort M'Henry.\" You know it better as \"The Star-Spangled Banner\"â€”America's national anthem.",
            
            "The British give up and sail away. Baltimore is saved. After Washington's disaster, this feels like REDEMPTION."
        ],
        whyMatters: "This is where the tide turns. After humiliation comes triumph. The fort that wouldn't fall and the flag that kept flying became symbols of American resilience. Also: this is literally where the national anthem came from.",
        
        quizVersions: [
            [
                {
                    question: "Why did the British want to capture Baltimore?",
                    options: [
                        { text: "It was the capital", correct: false },
                        { text: "It was a rich port city and home to American privateers attacking British ships", correct: true },
                        { text: "It had the biggest army", correct: false },
                        { text: "It was easy to capture", correct: false }
                    ]
                },
                {
                    question: "How long did the British bomb Fort McHenry?",
                    options: [
                        { text: "2 hours", correct: false },
                        { text: "25 hours", correct: true },
                        { text: "25 days", correct: false },
                        { text: "25 minutes", correct: false }
                    ]
                },
                {
                    question: "What inspired \"The Star-Spangled Banner\"?",
                    options: [
                        { text: "The burning of Washington", correct: false },
                        { text: "Seeing the huge American flag still flying over Fort McHenry after the bombardment", correct: true },
                        { text: "A parade", correct: false },
                        { text: "The Battle of New Orleans", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "How many soldiers defended Fort McHenry?",
                    options: [
                        { text: "About 100", correct: false },
                        { text: "About 1,000", correct: true },
                        { text: "About 10,000", correct: false },
                        { text: "None", correct: false }
                    ]
                },
                {
                    question: "How big was the American flag over Fort McHenry?",
                    options: [
                        { text: "10 feet by 15 feet", correct: false },
                        { text: "30 feet by 42 feet", correct: true },
                        { text: "5 feet by 8 feet", correct: false },
                        { text: "100 feet by 100 feet", correct: false }
                    ]
                },
                {
                    question: "About how many bombs hit Fort McHenry?",
                    options: [
                        { text: "About 180", correct: false },
                        { text: "About 1,800", correct: true },
                        { text: "About 18", correct: false },
                        { text: "About 18,000", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "Why couldn't the fort's cannons hit the British ships?",
                    options: [
                        { text: "They were out of ammunition", correct: false },
                        { text: "The British ships stayed out of range", correct: true },
                        { text: "The cannons were broken", correct: false },
                        { text: "Nobody knew how to use them", correct: false }
                    ]
                },
                {
                    question: "What convinced the British to give up on Baltimore?",
                    options: [
                        { text: "They ran out of bombs", correct: false },
                        { text: "The fort wouldn't fall and the land defenses were too strong", correct: true },
                        { text: "They got bored", correct: false },
                        { text: "Americans attacked them", correct: false }
                    ]
                },
                {
                    question: "Why did the flag matter so much?",
                    options: [
                        { text: "It didn't matter", correct: false },
                        { text: "It became a symbol of American resilience and inspired the national anthem", correct: true },
                        { text: "It scared the British", correct: false },
                        { text: "It was magic", correct: false }
                    ]
                }
            ]
        ],
        
        decisionPrompt: "Fort McHenry is getting HAMMERED by British bombs. How do you help?",
        decisions: [
            {
                id: "A",
                title: "Send militia to defend the city's land approaches",
                cost: { troops: 15, supplies: 10 },
                effect: { morale: 10 },
                outcome: "While the fort endures the bombing, your militia dig trenches around Baltimore. When British troops try to attack from land, they get STOPPED. The British can't win without taking both the fort AND the city. Defense wins.",
                historicalContext: "This happened. About 15,000 militia defended Baltimore's land approaches. They stopped the British land attack, which meant the British couldn't capture the city even if the fort fell.",
                analysis: "SMART. The fort can handle the naval bombardment, but you need to stop the land attack too. Layered defense = victory."
            },
            {
                id: "B",
                title: "Send privateers to harass British supply ships",
                cost: { supplies: 10, treasury: 15 },
                effect: { morale: 15, treasury: 20, diplomacy: 10 },
                outcome: "Baltimore's privateers swarm British supply ships like sharks. They capture supplies, disrupt operations, and make the British FURIOUS. The British start questioning if Baltimore is worth the trouble.",
                historicalContext: "Baltimore's privateers were one reason the British attacked in the first placeâ€”they'd been destroying British shipping for years. Using them during the battle added insult to injury.",
                analysis: "Creative and effective. Privateers were Baltimore's specialty. Using them to make the British miserable is perfect psychological warfare."
            },
            {
                id: "C",
                title: "Trust the fort - it's strong enough",
                cost: {},
                effect: { morale: 0 },
                outcome: "",
                random: {
                    chance: 0.75,
                    success: {
                        effect: { morale: 5 },
                        outcome: "The fort holds WITHOUT extra help. Major Armistead and his garrison are heroes. That huge flag is still flying. You saved your resources and still won."
                    },
                    failure: {
                        effect: { morale: -10, troops: -20, supplies: -15 },
                        outcome: "The bombing almost breaks through! You have to rush emergency troops at the last second. The fort holds... barely. You almost lost because you were too cheap to help."
                    }
                },
                historicalContext: "The fort was well-prepared and probably would've held on its own. But Baltimore's comprehensive defenses (land forces + privateers + fort) made victory certain instead of likely.",
                analysis: "Risky. The fort was strong, but why gamble? Better to ensure victory than save resources and maybe lose."
            }
        ]
    },
    
    // EVENT 7: NEW ORLEANS
    {
        id: 7,
        title: "Jackson's Miracle (1815)",
        reading: [
            "While diplomats argue about peace in Europe, Britain launches one final attack: New Orleans. If they capture it, they control the Mississippi River and all the land around it. HUGE prize.",
            
            "8,000 British veteransâ€”the best troops in the worldâ€”sail into the Gulf of Mexico. Defending New Orleans is Andrew Jackson with about 4,500 troops. But Jackson's \"army\" is WILD: regular soldiers, militia, free Black troops, Choctaw warriors, and literal pirates led by Jean Lafitte.",
            
            "Jackson builds a defensive line: a thick mud wall reinforced with cotton bales, stretching from a swamp to the Mississippi River. The British have to cross 800 yards of open ground to reach it.",
            
            "On January 8, 1815, the British attack in perfect formation. It's a MASSACRE. Jackson's troops, protected behind their wall, open fire. British soldiers are cut down in waves. In less than 30 minutes, over 2,000 British are dead or wounded, including their general.",
            
            "American casualties? 13 killed, 58 wounded. It's not even close.",
            
            "Here's the weird part: this battle happened TWO WEEKS AFTER a peace treaty was signed in Europe. Nobody in America knew the war was over. But it doesn't matterâ€”New Orleans becomes the most famous American victory of the war.",
            
            "Andrew Jackson becomes a national hero. Americans believe they WON the war, even though the treaty gave them nothing."
        ],
        whyMatters: "Sometimes how a war ENDS matters more than what actually happened. New Orleans gave Americans a triumphant final memory. Jackson became president because of this battle. Perception is reality.",
        
        quizVersions: [
            [
                {
                    question: "Why was New Orleans important?",
                    options: [
                        { text: "It was the capital", correct: false },
                        { text: "It controlled the Mississippi River and access to western territories", correct: true },
                        { text: "It was easy to defend", correct: false },
                        { text: "It had the most people", correct: false }
                    ]
                },
                {
                    question: "What made Jackson's defensive position so good?",
                    options: [
                        { text: "He had more troops", correct: false },
                        { text: "His troops were behind a thick mud wall that protected them", correct: true },
                        { text: "He used magic", correct: false },
                        { text: "The British were cowards", correct: false }
                    ]
                },
                {
                    question: "What's ironic about the Battle of New Orleans?",
                    options: [
                        { text: "It was fought AFTER a peace treaty was already signed", correct: true },
                        { text: "The British won", correct: false },
                        { text: "Nobody fought", correct: false },
                        { text: "It was the first battle", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "How many British troops attacked?",
                    options: [
                        { text: "About 800", correct: false },
                        { text: "About 8,000", correct: true },
                        { text: "About 80,000", correct: false },
                        { text: "About 100", correct: false }
                    ]
                },
                {
                    question: "How many American troops did Jackson have?",
                    options: [
                        { text: "About 450", correct: false },
                        { text: "About 4,500", correct: true },
                        { text: "About 45,000", correct: false },
                        { text: "More than the British", correct: false }
                    ]
                },
                {
                    question: "How many Americans were killed?",
                    options: [
                        { text: "Only 13", correct: true },
                        { text: "About 130", correct: false },
                        { text: "About 1,300", correct: false },
                        { text: "Over 2,000", correct: false }
                    ]
                },
                {
                    question: "How long did the British attack last?",
                    options: [
                        { text: "Less than 30 minutes", correct: true },
                        { text: "3 hours", correct: false },
                        { text: "3 days", correct: false },
                        { text: "3 weeks", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "Why was Jackson's diverse army important?",
                    options: [
                        { text: "It showed Americans could work together against a common enemy", correct: true },
                        { text: "It made his army weaker", correct: false },
                        { text: "It caused problems", correct: false },
                        { text: "It didn't matter", correct: false }
                    ]
                },
                {
                    question: "Why did the British attack fail so badly?",
                    options: [
                        { text: "They were outnumbered", correct: false },
                        { text: "They had to cross open ground against fortified defenders - they were sitting ducks", correct: true },
                        { text: "Their weapons didn't work", correct: false },
                        { text: "They gave up", correct: false }
                    ]
                },
                {
                    question: "Even though the battle happened after peace was signed, why did it matter?",
                    options: [
                        { text: "It didn't matter at all", correct: false },
                        { text: "It gave Americans a triumphant ending to remember and made Jackson a hero", correct: true },
                        { text: "It restarted the war", correct: false },
                        { text: "It made things worse", correct: false }
                    ]
                }
            ]
        ],
        
        decisionPrompt: "Jackson's position looks strong, but he needs help. What do you send him?",
        decisions: [
            {
                id: "A",
                title: "Send EVERYTHING - maximum support!",
                cost: { troops: 30, supplies: 30, treasury: 20 },
                effect: { morale: 25 },
                outcome: "With massive support, Jackson's victory is even MORE crushing. The British are annihilated. But you've used almost all your resources. Hope the war's actually over...",
                historicalContext: "Jackson actually got minimal federal support. He won with local troops and his own brilliance. Sending everything would've been overkill.",
                analysis: "Wasteful. Jackson's position was SO strong he didn't need maximum support. You just depleted resources for no extra benefit. Overkill is still kill."
            },
            {
                id: "B",
                title: "Trust Jackson's position - send minimal help",
                cost: { troops: 10, supplies: 10 },
                effect: { morale: 15 },
                outcome: "",
                random: {
                    chance: 0.8,
                    success: {
                        effect: { morale: 0 },
                        outcome: "Jackson's defensive position is SO good that minimal help is enough. The British get slaughtered. You conserved resources AND got a legendary victory. Perfect."
                    },
                    failure: {
                        effect: { morale: -10, troops: -25, supplies: -25 },
                        outcome: "The British almost break through! You have to rush emergency reserves. The battle becomes desperate and costly. You win... barely."
                    }
                },
                historicalContext: "This is closest to what happened. Jackson got minimal federal support and won overwhelmingly because his defensive position was nearly perfect.",
                analysis: "SMART BET. Jackson's position was incredibly strong. The 80% success rate reflects that. Trust good commanders with good positions."
            },
            {
                id: "C",
                title: "Make deals with the pirates and locals for their support",
                cost: { treasury: 25, diplomacy: -10 },
                effect: { morale: 20, troops: 15 },
                outcome: "You promise Jean Lafitte's pirates pardons and payment. They provide artillery experts and local knowledge. Creole militia join up. Together, you crush the British. Some people criticize you for working with 'criminals.'",
                historicalContext: "Jackson DID work with Lafitte's pirates, offering pardons for their help. They provided skilled gunners and supplies. Jackson's willingness to work with anyone who'd fight was key to victory.",
                analysis: "BRILLIANT POLITICS. When you need to win, work with whoever will help. Lafitte's pirates were skilled fighters. The diplomatic cost is tiny compared to winning the battle."
            }
        ]
    },
    
    // EVENT 8: TREATY OF GHENT
    {
        id: 8,
        title: "Peace... Sort Of (1814)",
        reading: [
            "By late 1814, both sides are EXHAUSTED. Britain just finished fighting France for 20+ years and is broke. America's economy is destroyed by British blockades. Nobody's winning. Everybody wants out.",
            
            "Peace talks start in Ghent, Belgium. Britain wants to punish America: give land to create a Native American buffer state, take away fishing rights, maybe grab some territory.",
            
            "America says NO.",
            
            "Then news arrives: Americans won at Baltimore and Plattsburgh. Britain realizes conquering America would take YEARS and cost a fortune. Meanwhile, all the European powers are meeting in Vienna to divide up the world after Napoleon's defeat. Britain needs to focus on THAT, not some annoying war in America.",
            
            "On December 24, 1814, they sign the Treaty of Ghent. Here's what it says: everything goes back to how it was before the war. No territory changes. Nothing about impressment or trade rightsâ€”the whole REASON the war started. Prisoners get exchanged. That's it.",
            
            "On paper, it looks like the war accomplished NOTHING.",
            
            "But here's what DID change: America proved it could fight Britain and survive. Native American resistance in the Northwest was crushed, opening HUGE territories for expansion. Andrew Jackson became a hero. Americans felt confident and proud.",
            
            "People started calling this the \"Second War of Independence.\" Did America \"win\"? Not really. But Americans BELIEVED they won. And sometimes, that's what matters."
        ],
        whyMatters: "Wars don't always have clear winners. Sometimes both sides just stop fighting. But the MEANING of a warâ€”what people THINK happenedâ€”can be more important than what actually did. America gained nothing on paper but everything in confidence.",
        
        quizVersions: [
            [
                {
                    question: "What does \"status quo ante bellum\" mean?",
                    options: [
                        { text: "Total victory", correct: false },
                        { text: "Everything goes back to how it was before the war", correct: true },
                        { text: "The loser pays money", correct: false },
                        { text: "Everyone gets new territory", correct: false }
                    ]
                },
                {
                    question: "What did Britain want at the peace talks?",
                    options: [
                        { text: "Complete surrender", correct: false },
                        { text: "A Native American buffer state and fishing rights", correct: true },
                        { text: "America to rejoin the British Empire", correct: false },
                        { text: "Nothing", correct: false }
                    ]
                },
                {
                    question: "Why did Britain agree to peace without getting anything?",
                    options: [
                        { text: "America defeated them completely", correct: false },
                        { text: "American victories proved conquest would be too expensive, and Britain needed to focus on Europe", correct: true },
                        { text: "France forced them", correct: false },
                        { text: "British people revolted", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "When was the Treaty of Ghent signed?",
                    options: [
                        { text: "June 18, 1812", correct: false },
                        { text: "August 24, 1814", correct: false },
                        { text: "December 24, 1814", correct: true },
                        { text: "January 8, 1815", correct: false }
                    ]
                },
                {
                    question: "Where did the peace talks happen?",
                    options: [
                        { text: "London", correct: false },
                        { text: "Washington", correct: false },
                        { text: "Ghent, Belgium", correct: true },
                        { text: "Paris", correct: false }
                    ]
                },
                {
                    question: "How long had Britain been fighting France before focusing on America?",
                    options: [
                        { text: "About 2 years", correct: false },
                        { text: "Over 20 years", correct: true },
                        { text: "Never", correct: false },
                        { text: "Over 200 years", correct: false }
                    ]
                }
            ],
            [
                {
                    question: "Why did American victories at Baltimore matter to the peace talks?",
                    options: [
                        { text: "They didn't matter", correct: false },
                        { text: "They showed Britain that winning would take too long and cost too much", correct: true },
                        { text: "They forced Britain to surrender everything", correct: false },
                        { text: "They made America demand more territory", correct: false }
                    ]
                },
                {
                    question: "Did the treaty give America anything it fought for?",
                    options: [
                        { text: "Yes - everything America wanted", correct: false },
                        { text: "No - it said nothing about impressment or trade rights, but those issues became irrelevant anyway", correct: true },
                        { text: "America got half", correct: false },
                        { text: "America lost territory", correct: false }
                    ]
                },
                {
                    question: "How did the war change America even though the treaty gave them nothing?",
                    options: [
                        { text: "It didn't change anything", correct: false },
                        { text: "America proved it could defend itself, crushed Native resistance, and gained massive confidence", correct: true },
                        { text: "America became weaker", correct: false },
                        { text: "America became British again", correct: false }
                    ]
                }
            ]
        ],
        
        decisionPrompt: "Peace talks are happening. What do you demand?",
        decisions: [
            {
                id: "A",
                title: "Demand Britain admit they were wrong about impressment!",
                cost: { diplomacy: 15 },
                effect: { morale: 15 },
                outcome: "",
                random: {
                    chance: 0.4,
                    success: {
                        effect: { morale: 10, diplomacy: 10 },
                        outcome: "Britain, exhausted and desperate for peace, makes small concessions. They don't ADMIT wrongdoing, but they quietly agree to respect American sailors. You can call it a win."
                    },
                    failure: {
                        effect: { morale: -15, troops: -20, supplies: -25 },
                        outcome: "Britain refuses. Peace talks STALL. The war drags on through winter. More people die. More money wasted. Finally you accept status quo terms anyway. Your stubbornness accomplished nothing."
                    }
                },
                historicalContext: "American negotiators wanted concessions but wisely didn't push too hard. By 1814, impressment was already a dead issueâ€”Napoleon's defeat meant Britain didn't need it anymore.",
                analysis: "Risky pride move. Impressment is already over because the European war ended. Demanding Britain say 'sorry' might feel good but risks prolonging the war for nothing."
            },
            {
                id: "B",
                title: "Accept status quo - just end the war",
                cost: {},
                effect: { morale: 10, diplomacy: 20 },
                outcome: "You accept peace terms: everything goes back to normal. No apology about impressment, but Britain won't do it again anyway. Americans celebrate. The war is OVER.",
                historicalContext: "This is what happened. American negotiators accepted status quo terms. The Senate ratified it unanimously. Everyone just wanted the war to END.",
                analysis: "SMART AND MATURE. The practical issues were already solved. Britain doesn't need impressment anymore. Take the win and go home. Peace is victory."
            },
            {
                id: "C",
                title: "Demand Canadian territory as compensation!",
                cost: { diplomacy: 20 },
                effect: { morale: 10 },
                outcome: "Britain LAUGHS at you. They just defeated Napoleon. They're not giving you land you couldn't conquer. Your negotiators look stupid. You're forced to accept status quo anyway after wasting everyone's time.",
                historicalContext: "Some War Hawks wanted to demand territory. But America FAILED to conquer Canada multiple times. You can't demand what you couldn't win militarily. British negotiators would've laughed.",
                analysis: "DELUSIONAL. You tried to invade Canada and FAILED repeatedly. You have no leverage to demand territory. This is fantasy, not negotiation."
            }
        ]
    }
  ];
  
  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  
  function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
  }
  
  function updateResources() {
    Object.keys(gameState.resources).forEach(resource => {
        const value = gameState.resources[resource].value;
        const max = gameState.resources[resource].max;
        const percentage = (value / max) * 100;
        
        document.getElementById(`${resource}-value`).textContent = Math.round(value);
        
        const bar = document.getElementById(`${resource}-bar`);
        bar.style.width = `${Math.max(0, percentage)}%`;
        
        bar.classList.remove('warning', 'danger');
        if (percentage <= 20) {
            bar.classList.add('danger');
        } else if (percentage <= 40) {
            bar.classList.add('warning');
        }
    });
    
    Object.keys(gameState.resources).forEach(resource => {
        if (gameState.resources[resource].value <= 0) {
            gameOver(resource);
        }
    });
  }
  
  function applyResourceChanges(changes) {
    const changesList = [];
    
    Object.keys(changes).forEach(resource => {
        const change = changes[resource];
        const oldValue = gameState.resources[resource].value;
        gameState.resources[resource].value += change;
        
        if (gameState.resources[resource].value > gameState.resources[resource].max) {
            gameState.resources[resource].value = gameState.resources[resource].max;
        }
        if (gameState.resources[resource].value < 0) {
            gameState.resources[resource].value = 0;
        }
        
        const newValue = gameState.resources[resource].value;
        const actualChange = newValue - oldValue;
        
        if (actualChange !== 0) {
            changesList.push({
                resource: resource,
                change: actualChange
            });
        }
    });
    
    updateResources();
    return changesList;
  }
  
  function displayResourceChanges(changes) {
    const container = document.getElementById('resource-changes');
    container.innerHTML = '';
    
    changes.forEach(change => {
        const div = document.createElement('div');
        div.className = 'resource-change';
        
        if (change.change > 0) {
            div.classList.add('positive');
            div.innerHTML = `<strong>${change.resource.toUpperCase()}</strong><br>+${change.change}`;
        } else if (change.change < 0) {
            div.classList.add('negative');
            div.innerHTML = `<strong>${change.resource.toUpperCase()}</strong><br>${change.change}`;
        } else {
            div.classList.add('neutral');
            div.innerHTML = `<strong>${change.resource.toUpperCase()}</strong><br>No Change`;
        }
        
        container.appendChild(div);
    });
  }
  
  function gameOver(resource) {
    const messages = {
        troops: "Your army is GONE. No soldiers = no defense. The British walk right in and take over. Game over.",
        supplies: "You're out of food, ammunition, and equipment. Soldiers can't fight on empty stomachs. Your army falls apart. Game over.",
        treasury: "BANKRUPT. Can't pay soldiers. Can't buy supplies. Can't do anything. The government collapses. Game over.",
        morale: "Nobody supports the war anymore. Militias desert. Citizens refuse to fight. The government loses all power. Game over.",
        diplomacy: "America is completely isolated. No allies. No trade. No help. Britain's blockade starves the nation. Game over."
    };
    
    document.getElementById('gameover-message').innerHTML = `
        <h3>ðŸ’€ ${resource.toUpperCase()} = ZERO</h3>
        <p>${messages[resource]}</p>
        <p><strong>You made it through ${gameState.currentEventIndex} of 8 events.</strong></p>
    `;
    
    showScreen('gameover-screen');
  }
  
  // ============================================
  // EVENT SYSTEM
  // ============================================
  
  function loadEvent(eventIndex) {
    const event = events[eventIndex];
    gameState.currentEventIndex = eventIndex;
    gameState.quizAnswers = [];
    gameState.quizMessage = '';
    gameState.currentQuestions = [];
    
    document.getElementById('event-title').textContent = event.title;
    document.getElementById('event-number').textContent = `Event ${eventIndex + 1} of ${events.length}`;
    
    const readingContent = document.getElementById('reading-content');
    readingContent.innerHTML = event.reading.map(p => `<p>${p}</p>`).join('');
    
    document.getElementById('why-matters-text').textContent = event.whyMatters;
    
    document.getElementById('reading-phase').classList.remove('hidden');
    document.getElementById('quiz-phase').classList.add('hidden');
    document.getElementById('decision-phase').classList.add('hidden');
    document.getElementById('outcome-phase').classList.add('hidden');
    
    showScreen('game-screen');
  }
  
  // ============================================
  // QUIZ SYSTEM
  // ============================================
  
  function startQuiz() {
    const event = events[gameState.currentEventIndex];
    
    if (gameState.currentQuestions.length === 0) {
        const versionIndex = Math.floor(Math.random() * event.quizVersions.length);
        gameState.currentQuestions = event.quizVersions[versionIndex];
    }
    
    gameState.quizMessage = '';
    
    document.getElementById('reading-phase').classList.add('hidden');
    document.getElementById('quiz-phase').classList.remove('hidden');
    
    renderCurrentQuizQuestion();
  }
  
  function renderCurrentQuizQuestion() {
    const currentQuestionIndex = gameState.quizAnswers.length;
    const totalQuestions = gameState.currentQuestions.length;
    
    if (currentQuestionIndex >= totalQuestions) {
        showQuizComplete();
        return;
    }
    
    const quizContainer = document.getElementById('quiz-container');
    
    // Check if we just got a correct or wrong answer
    const justGotCorrect = gameState.quizMessage && gameState.quizMessage.includes('CORRECT');
    const justGotWrong = gameState.quizMessage && gameState.quizMessage.includes('WRONG');
    const showingFeedback = justGotCorrect || justGotWrong;
    
    // If showing correct feedback, we need the PREVIOUS question (the one just answered)
    // because we already pushed to quizAnswers
    const displayQuestionIndex = justGotCorrect ? currentQuestionIndex - 1 : currentQuestionIndex;
    const currentQuestion = gameState.currentQuestions[displayQuestionIndex];
    
    const feedbackHtml = gameState.quizMessage ? `
      <div class="feedback ${gameState.quizMessage.includes('CORRECT') ? 'success' : 'failure'}">
          ${gameState.quizMessage}
      </div>
  ` : '';
    
    quizContainer.innerHTML = `
        <div class="quiz-progress" style="text-align: center; margin-bottom: 20px;">
            <h3>Question ${displayQuestionIndex + 1} of ${totalQuestions}</h3>
        </div>
        
        ${feedbackHtml}
        
        <div class="quiz-question">
            <h4>${currentQuestion.question}</h4>
            
            <div id="quiz-options-container"></div>
        </div>
        
        ${showingFeedback ? '' : `
        <div style="display: flex; gap: 15px; margin-top: 30px; flex-wrap: wrap;">
            <button class="btn" onclick="exitQuizAndGoBack()" style="flex: 1; min-width: 200px; background-color: #2c5d8a; font-size: 1em; padding: 15px;">
                📚 Back to Reading (Keep Progress)
            </button>
        </div>
        `}
        
        ${showingFeedback ? '' : `
        <div class="message-box" style="background-color: #8b4545; margin-top: 20px;">
            <p><strong>⚠️ WARNING:</strong> Wrong answers cost resources! Read carefully!</p>
        </div>
        `}
    `;
    
    const optionsContainer = document.getElementById('quiz-options-container');
    
    // If we just got a correct answer, show continue button
    if (justGotCorrect) {
        const continueBtn = document.createElement('button');
        continueBtn.className = 'btn';
        continueBtn.textContent = 'CONTINUE ➜';
        continueBtn.style.marginTop = '20px';
        continueBtn.onclick = () => {
            gameState.quizMessage = '';
            renderCurrentQuizQuestion();
        };
        optionsContainer.appendChild(continueBtn);
    } 
    // If we just got a wrong answer, show try again button
    else if (justGotWrong) {
        const tryAgainBtn = document.createElement('button');
        tryAgainBtn.className = 'btn';
        tryAgainBtn.textContent = '🔄 TRY AGAIN';
        tryAgainBtn.style.marginTop = '20px';
        tryAgainBtn.onclick = () => {
            gameState.quizMessage = '';
            renderCurrentQuizQuestion();
        };
        optionsContainer.appendChild(tryAgainBtn);
    } 
    // Otherwise show quiz options
    else {
        const shuffledOptions = shuffle(currentQuestion.options.map((opt, idx) => ({
            ...opt,
            originalIndex: idx
        })));
        
        shuffledOptions.forEach((option, optIndex) => {
          const optionDiv = document.createElement('div');
          optionDiv.className = 'quiz-option';
          optionDiv.setAttribute('data-correct', option.correct);
          
          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = 'current-question';
          radio.value = option.correct;
          radio.id = `opt-${optIndex}`;
          
          const label = document.createElement('label');
          label.htmlFor = `opt-${optIndex}`;
          label.textContent = option.text;
          
          optionDiv.appendChild(radio);
          optionDiv.appendChild(label);
          
          optionDiv.addEventListener('click', () => {
              radio.checked = true;
              answerCurrentQuestion(option.correct, optionDiv);
          });
          
          optionsContainer.appendChild(optionDiv);
        });
    }
    
    document.getElementById('submit-quiz-btn').style.display = 'none';
  }
  
  function answerCurrentQuestion(isCorrect, clickedOptionDiv) {
    const currentQuestionIndex = gameState.quizAnswers.length;
    const currentQuestion = gameState.currentQuestions[currentQuestionIndex];
    
    if (isCorrect) {
        // CORRECT! Show fun fact and continue button
        gameState.quizAnswers.push(true);
        gameState.quizMessage = `✅ <strong>CORRECT!</strong> ${currentQuestion.funFact}`;
        
        // Re-render to show success message and continue button
        renderCurrentQuizQuestion();
        
    } else {
        // WRONG! Apply penalty
        const penaltyOptions = [
            { type: 'troops', amount: -10, emoji: '💥' },
            { type: 'supplies', amount: -8, emoji: '📦' },
            { type: 'treasury', amount: -12, emoji: '💰' },
            { type: 'morale', amount: -5, emoji: '❤️' },
            { type: 'diplomacy', amount: -8, emoji: '🤝' }
        ];
        
        const penalty = penaltyOptions[Math.floor(Math.random() * penaltyOptions.length)];
        
        const changes = {};
        changes[penalty.type] = penalty.amount;
        applyResourceChanges(changes);
        
        gameState.quizMessage = `❌ <strong>WRONG!</strong> You lost ${Math.abs(penalty.amount)} ${penalty.emoji} ${penalty.type}. Read more carefully and try again!`;
        
        // Re-render to show the error message
        renderCurrentQuizQuestion();
    }
  }
  
  function showQuizComplete() {
    const quizContainer = document.getElementById('quiz-container');
    const totalQuestions = gameState.currentQuestions.length;
    
    quizContainer.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 5em; margin: 20px 0;">âœ…</div>
            <h2 style="color: #4a7c4e;">You passed!</h2>
            <div class="message-box" style="background-color: #4a7c4e; color: white;">
                <p style="font-size: 1.3em;">Nice! You got all ${totalQuestions} questions right.</p>
                <p style="margin-top: 10px;">You understand this part of the war. Now make your decision!</p>
            </div>
            <button class="btn" onclick="passQuizAndContinue()">Make Your Decision</button>
        </div>
    `;
    
    document.getElementById('submit-quiz-btn').style.display = 'none';
  }
  
  function passQuizAndContinue() {
    startDecisionPhase();
  }
  
  function exitQuizAndGoBack() {
    document.getElementById('quiz-phase').classList.add('hidden');
    document.getElementById('reading-phase').classList.remove('hidden');
    gameState.quizMessage = '';
  }
  
  // ============================================
  // DECISION SYSTEM
  // ============================================
  
  function startDecisionPhase() {
    const event = events[gameState.currentEventIndex];
    
    document.getElementById('quiz-phase').classList.add('hidden');
    document.getElementById('decision-phase').classList.remove('hidden');
    
    document.getElementById('decision-prompt').innerHTML = `<p><strong>${event.decisionPrompt}</strong></p>`;
    
    const optionsContainer = document.getElementById('decision-options');
    optionsContainer.innerHTML = '';
    
    event.decisions.forEach((decision, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'decision-option';
        
        const title = document.createElement('h4');
        title.textContent = `Option ${decision.id}: ${decision.title}`;
        optionDiv.appendChild(title);
        
        if (Object.keys(decision.cost).length > 0) {
            const costDiv = document.createElement('div');
            costDiv.className = 'decision-cost';
            const costText = Object.entries(decision.cost)
                .map(([resource, amount]) => `-${amount} ${resource}`)
                .join(', ');
            costDiv.textContent = `ðŸ’° Cost: ${costText}`;
            optionDiv.appendChild(costDiv);
        } else {
            const costDiv = document.createElement('div');
            costDiv.className = 'decision-cost';
            costDiv.textContent = `ðŸ’° Cost: FREE`;
            optionDiv.appendChild(costDiv);
        }
        
        const mysteryDiv = document.createElement('div');
        mysteryDiv.style.fontStyle = 'italic';
        mysteryDiv.style.color = '#666';
        mysteryDiv.style.marginTop = '10px';
        mysteryDiv.textContent = 'â“ What will happen? Choose to find out...';
        optionDiv.appendChild(mysteryDiv);
        
        optionDiv.addEventListener('click', () => makeDecision(index));
        optionsContainer.appendChild(optionDiv);
    });
  }
  
  function makeDecision(decisionIndex) {
    const event = events[gameState.currentEventIndex];
    const decision = event.decisions[decisionIndex];
    
    const costChanges = {};
    Object.keys(decision.cost).forEach(resource => {
        costChanges[resource] = -decision.cost[resource];
    });
    const costs = applyResourceChanges(costChanges);
    
    let effectChanges = { ...decision.effect };
    let outcomeText = decision.outcome;
    
    if (decision.random) {
        const roll = Math.random();
        if (roll < decision.random.chance) {
            effectChanges = { ...effectChanges, ...decision.random.success.effect };
            outcomeText = decision.random.success.outcome;
        } else {
            effectChanges = { ...effectChanges, ...decision.random.failure.effect };
            outcomeText = decision.random.failure.outcome;
        }
    }
    
    const effects = applyResourceChanges(effectChanges);
    const allChanges = [...costs, ...effects];
    
    document.getElementById('decision-phase').classList.add('hidden');
    document.getElementById('outcome-phase').classList.remove('hidden');
    
    const outcomeHTML = `
        <div class="outcome-section">
            <h3 style="color: #c8102e; margin-bottom: 15px;">ðŸ“œ What Happened:</h3>
            <p style="font-size: 1.1em; line-height: 1.6;">${outcomeText}</p>
        </div>
        
        <div class="outcome-section" style="background-color: #f4e9d8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 5px solid #8b6f47;">
            <h3 style="color: #8b6f47; margin-bottom: 10px;">ðŸ“š What REALLY Happened in History:</h3>
            <p style="color: #2c1810; line-height: 1.6;">${decision.historicalContext}</p>
        </div>
        
        <div class="outcome-section" style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 5px solid #2c5d8a;">
            <h3 style="color: #2c5d8a; margin-bottom: 10px;">ðŸŽ¯ Was This a Good Choice?</h3>
            <p style="color: #1a1a2e; line-height: 1.6; font-weight: 500;">${decision.analysis}</p>
        </div>
    `;
    
    document.getElementById('outcome-content').innerHTML = outcomeHTML;
    displayResourceChanges(allChanges);
  }
  
  // ============================================
  // GAME FLOW
  // ============================================
  
  function nextEvent() {
    if (gameState.currentEventIndex < events.length - 1) {
        loadEvent(gameState.currentEventIndex + 1);
    } else {
        showReflectionScreen();
    }
  }
  
  function showReflectionScreen() {
    let victoryStatus = '';
    let victoryClass = '';
    
    const resourcesAbove30 = Object.values(gameState.resources).filter(r => r.value > 30).length;
    const morale = gameState.resources.morale.value;
    
    if (resourcesAbove30 === 5 && morale > 60) {
        victoryStatus = 'ðŸŽ–ï¸ LEGENDARY - You crushed it! America survived with strength!';
        victoryClass = 'complete-victory';
    } else if (resourcesAbove30 >= 3 && morale > 40) {
        victoryStatus = 'âš”ï¸ SURVIVED - You made it through, but it was rough.';
        victoryClass = 'hard-fought';
    } else {
        victoryStatus = 'ðŸ´ BARELY ALIVE - America survived... barely.';
        victoryClass = 'survival';
    }
    
    const finalResourceDisplay = document.getElementById('final-resource-display');
    finalResourceDisplay.innerHTML = '';
    
    Object.entries(gameState.resources).forEach(([name, data]) => {
        const div = document.createElement('div');
        div.className = 'final-resource';
        div.innerHTML = `<strong>${name.toUpperCase()}</strong><br>${Math.round(data.value)} / ${data.max}`;
        finalResourceDisplay.appendChild(div);
    });
    
    const victoryStatusDiv = document.getElementById('victory-status');
    victoryStatusDiv.textContent = victoryStatus;
    victoryStatusDiv.className = victoryClass;
    
    showScreen('reflection-screen');
  }
  
  // ============================================
  // EVENT LISTENERS
  // ============================================
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-btn').addEventListener('click', () => {
        const name = document.getElementById('student-name').value.trim();
        if (name) {
            gameState.studentName = name;
            loadEvent(0);
        } else {
            alert('Please enter your name to begin.');
        }
    });
    
    document.getElementById('reading-done-btn').addEventListener('click', startQuiz);
    
    document.getElementById('next-event-btn').addEventListener('click', nextEvent);
    
    document.getElementById('generate-pdf-btn').addEventListener('click', () => {
        const studentNameHeader = document.createElement('div');
        studentNameHeader.style.textAlign = 'center';
        studentNameHeader.style.marginBottom = '20px';
        studentNameHeader.innerHTML = `<h2>Student: ${gameState.studentName}</h2><h3>War of 1812 - Final Reflection</h3>`;
        
        document.getElementById('reflection-screen').insertBefore(
            studentNameHeader,
            document.getElementById('final-results')
        );
        
        window.print();
        
        setTimeout(() => {
            studentNameHeader.remove();
        }, 1000);
    });
    
    document.getElementById('restart-btn').addEventListener('click', () => {
        location.reload();
    });
  });
