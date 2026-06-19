---
title: the shape of explanations
date: 2026-06-19
---
## The Shape of Explanations

*Anthrogen releases Odyssey1, Fei-Fei Li evangelises Spatial Intelligence and the universe breaks our brain.*

Artificial intelligence sits on a central branch of the tech tree that leads towards planetary abundance. That branch and its offshoots sprawl across materials, biology, robotics, and earth systems, but the systems we think will matter share one trait - an ability to decode the secrets of the universe via explanations, rather than predictions.

Intelligence capable of such feats has already evolved in carbon. Explanations are the default way we make sense of our structured world, where matter and information are organised into patterns, carved by universal forces that behave with shocking consistency.

Thanks to the lawful properties of our world, the reality we experience reads like Homer composing an epic, rather than infinite monkeys plunking away on some keyboards - structure first, stochastic second.<sup id="fnref1"><a href="#fn1">1</a></sup>

![software 3.0, without the nice merch](https://substackcdn.com/image/fetch/$s_!CjdJ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1b87c58b-9382-4257-a584-096228acdb98_470x375.png)

*software 3.0, without the nice merch*

**With that in mind, the real question is which architectures can uncover the laws of the universe before getting swallowed by the brute combinatorics of its randomness.**<sup id="fnref2"><a href="#fn2">2</a></sup>

A sizeable chunk of AGI claimants are betting on statistical models discovering those rules through latent space - keeping the monkeys’ writing until they produce _The_ _Iliad_.

This essay started as a narrow counterpositioning: a look under the hood at [Odyssey](https://www.anthrogen.com/odyssey-launch), the protein model launched in October by our portfolio company [Anthrogen](http://anthrogen.com/). Odyssey marks the world’s largest and most capable model in its category, and it was built with orders of magnitude less capital and compute - a reminder that structure can outrun brute-force.

This seemed like a small and tidy way to confront the tension, with no possibility of getting sidetracked.<sup id="fnref3"><a href="#fn3">3</a></sup>

Needless to say, while this piece does get to Odyssey, it inevitably mutated into a study of the progress and roadblocks in generative biology as a way to parse what it would take to rewire a model from first-principles up. The pattern is unambiguous: protein models fail the moment their architecture stops behaving like the physical systems they aim to emulate and starts behaving like a symbolic machine.

The lesson gained asserts a critical, universal principle for designing the systems that will lead in intelligence: If a machine is to understand how the universe works, its computational logic must fundamentally align with how the universe acts. That demands the path to genuine understanding to reason directly down the only axes reality reliably expresses itself: space.

---

## I. Spatial Intelligence

The next frontier of artificial intelligence boils down to building spatial intelligence, if you ask Dr Fei-Fei Li. Her [argument](https://drfeifei.substack.com/p/from-words-to-worlds-spatial-intelligence), shared as World Lab’s manifesto but prevalent in her work for decades, reaches far beyond proteins, and transcends biology to any physical domain.

![to understand the competing ontologies in the AI community, i have been learning about shapes](https://substackcdn.com/image/fetch/$s_!fyZc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06820d17-12f6-469d-8228-2a0632522482_1920x1255.jpeg)

***to understand the competing ontologies in the AI community, i have been learning about shapes!***

Li anchors the claim with a history lesson. Understanding grows from perception-action loops, where organisms engage with a world shaped by geometry and physical constraint. Through that engagement, evolution pushed us toward biases that reflect the structures of our environment.

The model of the world built on those priors includes explanations many of us would take for granted. Where things sit determines which parts can interact. How events unfold over time determines how interactions propagate, and physical forces tie nearby elements together in reliable ways.

At the bare minimum, these biases tell us to reason about space as three-dimensional and time as directional. And despite their mundanity, these patterns shape how we move through the world and make sense of uncertain information, how we imagine, and what we think might happen next. Those are the most basic features that help us understand how events unfold - and once a system treats space as structured and change as local, cause and effect become learnable rather than statistical guesses.

## II. Monkeys in Flatland

Li’s point is not to dunk on people who have built architectures for text, but her stance on spatial reasoning pushes against the prevailing assumption that these models might suddenly gain some emergent reasoning, capable of conceptualising the world in explanations rather than correlations.

Consider this: most information we encounter is organised in space. Text is the weird exception. It’s a linear stream of symbols with no intrinsic geometry, unnaturally absent of any physical cues that would help us parse it. Language breaks the most basic expectations. Two adjacent symbols can be irrelevant, while a distant symbol reshapes the entire meaning.

For computers, this manifests as a learning problem with no analogue in the real world. That is why the introduction of iterative self-attention was such [a landmark achievement](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf). Eight scientists at Google figured out how to handle this unnatural condition, and suddenly LLMs could scan everywhere for relationships and collapse the immense combinatorial complexity of an unstructured world into global correlations.<sup id="fnref4"><a href="#fn4">4</a></sup>

The models have to treat every sequence as an unbounded search problem. Global patterns are all they can learn, and all they ever have access to. Order is the sole reliable signal. Correlations are the only patterns available for extraction.

If that seems abstract, consider what the model never sees: why a sentence exists, what event triggered it, what meaning it encodes, what physical or mental process shaped it. All it gets is the surface pattern that grammar and usage produce - for lack of a better term, all it has are vibes, not causes.

Like I said - don’t consider that a dunk (yet). Within the logic of language, this spawns incredibly scalable predictive systems. In a world made of text, [explanations do not exist](https://www.thealgorithmicbridge.com/p/harvard-and-mit-study-ai-models-are): global statistical patterns are all you’ve got.

![article image](https://substackcdn.com/image/fetch/$s_!6ddj!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F09220982-111e-4d37-9c9c-9049e56a6600_680x732.png)

The trouble starts when physics-abiding fields borrow whatever software stack happens to be fashionable. Protein modelling grabbed the transformer because it worked on sequences and everyone already had the code. The convenience is obvious, but so is the hangover.

Think of a protein as a very complicated knot, with a sequence telling you what each stretch of string is made of. The folded shape governs how the knot behaves, so flattening a knot into a sequence is erasing the primary thing that gives a protein meaning – the geometry it folds into.

Raw sequence space is vast, and reducing proteins to linear strings can drive early progress, yet the gap between one-dimensional markup and a three-dimensional world is a canyon.

![The Global Proteome: A few coherent stories hidden in a library of infinite gibberish!](https://substackcdn.com/image/fetch/$s_!6q1X!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fabf6e4a0-02e2-49e4-aaa0-d6005f82ccab_725x448.jpeg)

***The Global Proteome: A few coherent stories hidden in a library of infinite gibberish***

Natural proteins offered a bridge. They cluster in a narrow region of sequence space because mutations are constantly being tested against functional constraints and failures are whittled away by evolutionary selection. Datasets offer a statistical clue: the same two positions tend to shift together across related proteins, it often means they work together in the final structure. Over long evolutionary spans, these covarying paired changes accumulate and become visible as a clear signal of structure.

Still, as sequencing costs had plummeted by the early 2010s, these datasets outpaced every other way of understanding proteins. Labs were able to generate millions of protein sequences every year, but experimental structure determination advanced far slower.

[AlphaFold 2](https://www.nature.com/articles/s41586-021-03819-2) was a breakthrough arrived at a perfect storm: The Protein Data Bank had accumulated enough solved structures to make its geometry statistically legible, and DeepMind contributed a transformer large enough to mine that geometry alongside the usual evolutionary covariance. The Evoformer digs through MSAs, picks up long-range shifts that echo across related proteins, and matches those signals against a vast archive of real folds. <sup id="fnref5"><a href="#fn5">5</a></sup>

It was a massive leap from AF1, which lived on sequence alone and needed outside help to turn its guesses into contacts. AF2 pulled everything into one system and tightened the predictions. But the logic didn’t change much. It still leans on correlations rather than causes. It learned what natural proteins tend to look like and produced structures that match those tendencies with remarkable fidelity. That improvement in coherence comes from exposure to thousands of real geometries, rather than from any grasp of the forces that make those geometries stable.

What allowed AlphaFold to succeed also defines its boundaries. It’s astonishing at predicting the dominant fold for stable, well-behaved proteins, without ever deriving or simulating a physical cause. It reaches road’s end in sequence or structural space where those correlations thin out: the strange borderlands where correlations of covariance patterns mislead, and in the unlit territory the datasets never explored.

Biology is particularly wicked in the way it nags at this - nearly identical sequences can fall into entirely different shapes, proteins shift between multiple forms, mutated sequences don’t stably fold at all, persisting only because evolution can afford to stop optimising at “good enough”. Many viable or more optimal structures are never reached.<sup id="fnref6"><a href="#fn6">6</a></sup>

This is why biologists flinch when people declare the folding problem solved. AF2 predicts the end products evolution already discovered. It does not expose the rules that carve the space of possible proteins. [Recent studies](https://pmc.ncbi.nlm.nih.gov/articles/PMC11344769/) make this clearer: the model often retrieves familiar motifs and splices them together, rather than producing a genuinely new fold from first principles. That’s the clearest reminder of what kind of tool this is - a powerful statistical summary of what life has already tested, nothing more.

## III. The Cliff’s Edge

Evolutionary datasets are clearly useful, but we needed a way to discover the rules that live within them, rather than a catalogue of past outcomes.

[Evolutionary Scale’s approach](https://www.evolutionaryscale.ai/blog/esm3-release) proposes a way to do this: treat evolution as a long-running generative search bounded by physical constraint. If AlphaFold maps where stable folds appear along evolution’s trail, ESM3 is a tracker, trying to understand where and why evolution moved through a region at all.

To build a model capable of walking that terrain, the team developed a multimodal representation that treats mutations as a physical event. In previous models, sequence, structure, and function were treated as separate views to be aligned, which means a mutation shows up effectively as symbolic swap rather than an action. In ESM3, Evolutionary Scale managed to engineer a latent space where all of these modalities sat in one frame.

We’ll get to ‘how’ they do this later on, but for now, the important thing to appreciate is that once those pieces moved together, the evolutionary dataset became a record of disconnected sequences and structures to be reconciled. For the first time, a model was looking at evolution as a _process_, where changes flowed through proteins and consequences were realised. Credit where credit is due: ESM3’s multimodal treatment of the evolutionary corpus was a massive breakthrough, and it sharpened the outline of the selective constraints evolution had to follow.

Still, there is a subtle, critical gap between knowing where a boundary sits, and explaining what produces it. Despite the accomplishment of architecting a model capable of representing mutations as an event with likely consequences, ESM3 falls short of articulating the physical mechanism behind those consequences.

If that distinction feels abstract, imagine you’re ESM3 tracking a pride of lions, and you reach a river where their footprints stop and turn back. You can mark the far bank as somewhere lions don’t go and reasonably assume the river is the reason why. But you still can’t see the mechanism that made them turn around. The tracks alone won’t tell you where the rapids are impassable, whether crocodiles make the water unsafe, or if the opposite bank is unstable. You can see where the limit sits, but you can’t see the physical mechanism that generates it.<sup id="fnref7"><a href="#fn7">7</a></sup>

![A 1D model navigating 4D space](https://substackcdn.com/image/fetch/$s_!GiQu!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4cf08d0e-5eb8-40e1-9bdf-a6b25c286e05_1280x720.jpeg)

***A 1D model navigating 4D space***

This absence of explanation also limits how much you can generalise beyond the paths evolution has traced. If you don’t know why a route fails, you’re unlikely to find the best way around it, and you won’t anticipate conditions in places evolution never visited. You might keep trying to build a boat when the real issue was footing, or avoid every river because the ones you’ve seen had crocodiles. Cause and effect end up flattened into “this works” or “this fails,” with no mechanism underneath to guide the next step.

Until a model can reason about physical causes and effects, no amount of additional data or scale will meaningfully shift that frontier. Progress requires the capability to build an explanation.

## IV. The Odyssey

This leads me to the Odyssey - a family of protein foundation models released by [Anthrogen](http://anthrogen.com/) in October.

**Full disclosure upfront:** I (through ReGen) have known [Ankit](https://www.linkedin.com/in/ankit-singhal-columbia/) and [Connor](http://linkedin.com/in/connor-lee-692a40263?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEDCb84B0EvuzIVIInhkuvXnxQR7FT4IUDs) since investing in late 2023. While our belief in the team’s abilities skews our perspective, we can’t take credit for betting on them building a specific architecture when we originally partnered with them. At that point, they were still relying on existing gear, hoping to accelerate other people’s models with better data and wet-lab validation. But upon encountering these limits, they decided to ditch the existing tools and build one themselves.

To capture the full picture, you should read [the white paper](https://www.anthrogen.com/odyssey-launch) and [the pre-print](https://www.biorxiv.org/content/10.1101/2024.07.01.600583v1.full-text) for yourself. I’ll (attempt to) present a lay description of what they built, aiming to show how the architecture represents a first principles approach to building spatial intelligence rather than diving into technical weeds.

We’ll look at three layers: how a model represents proteins, how it pays attention to the information it holds, and how it learns to produce structures coherent in that world. To illustrate the divergence, I’ll contrast Odyssey1 with ESM3. This isn’t about diminishing the accomplishments of Evolutionary Scale’s team — they pioneered the zig that set foundation for Anthrogen to zag. Because ESM3 is the leading approach in its lineage, the model the fairest point of comparison for seeing the divergence of how the two models actually reason.

---

### A. Representation: Labels v. Positions

The first break is in how each model _sees_ a protein.

Earlier I mentioned that generative protein models like ESM3 work best when multimodal, but flagged I’d explain “how” later. That fusion seems effortless in the natural world, because these are just three lenses on the same physical object. But computers don’t inherit that unity for free - they can only model the discrete units you hand them, and an ML system has to run numerical logic over those units (call them tokens) to find relationships. The choice of units to organise information sets the boundaries for the kinds of relationships the model can explore, and ultimately defines the internal structure the model will unearth.

ESM3 chooses **symbols** as its core format. The sequence letter, residue index and annotations are already expressed this way, so ESM3 uses an encoder that slices the 3D shape around each residue into small chunks, then assigns each a name from its known vocabulary. It cleverly compresses that spatial context into a symbolic label.

Odyssey chooses **positions**. It adapts an approach from video models (FSQ) that projects the geometric structure of a protein directly onto a cubic grid. Every atom is placed onto a cubic grid, and each voxel is then encoded with sequence and functional context.

This is where the overarching divergence begins: Odyssey starts with spatial relationships baked into the data; ESM3 starts with statistical patterns.

### B. Attention: Teleportation vs. Propagation

**Attention** determines how information flows through the model to form its logic - which signals reach which parts, and in what order. The representation you choose fundamentally shapes what biases the attention mechanism can work with. I’ll flag that Consensus-Attention is arguably the secret spatial reasoning sauce for Anthrogen, so this is the most important component to keep in mind.

Starting with ESM3: Like a language model, it works with symbolic tokens that have no inherent spatial structure, so it adapts the same mechanism (Self Attention) to search globally and find useful relationships. A weak geometric bias is applied afterwards, but it only modulates weights that have already been computed globally.

![article image](https://substackcdn.com/image/fetch/$s_!TU2i!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56978fcf-895e-40d8-b10f-843dc907f4b1_796x603.png)

This is the main mechanical failure leading to the consequence without cause problem outlined above: in evolutionary data, the strongest statistical signals come from extreme outcomes. A lethal mutation that causes a protein to misfold generates a powerful signal linking those two positions – but that signal teleports across the sequence without revealing the physical pathway between them. The model can’t distinguish whether the failure resulted from a direct interaction or from a cascade of smaller, intermediate changes that propagated through space. By allowing information to jump directly to the outcome, the architecture implicitly frames every change as a probability of producing a certain result.

With **positional units** like Odyssey’s, the architecture inherits a structural prior that ESM3 must work without: physical proximity as an organising principle. Because each voxel already occupies a defined patch of 3D space, the model can exploit the inductive bias that spatially close positions are more likely to interact. This is the critical difference. Where ESM3 treats all relationships as equally plausible until proven otherwise, Odyssey begins with the assumption that the geometry of space itself constrains which interactions matter.

This is what makes **Consensus** the true standout piece of Odyssey’s architecture. Rather than allowing information to teleport across arbitrary distances, Consensus enforces a propagation model: each voxel attends only to its immediate spatial neighbours - the handful of positions that physically touch it. Information must flow step-by-step through the structure, just as physical forces do. Run this iteratively, and ripples of stability spread outward, agree, and meet increasingly large neighbourhoods as they propagate. That replicates the same principle that governs real protein folding: local interactions compound into global structure.

This builds a genuine inductive bias toward physics. It isn’t yet claiming causal reasoning, but it pushes the model closer by making it learn how effects accumulate through local interactions. By forcing information to propagate locally, the architecture mirrors how forces and constraints actually move through molecular matter: a change in one region causes effects in adjacent regions, which in turn influence their neighbours. The model has to learn the intermediate steps that connect cause to effect.

The approach also scales linearly rather than quadratically - cost grows with the number of voxels (everything × neighbours), not with the square of that number that attention imposes (everything × everything). That’s why the architecture remains tractable even as protein size increases.

### C. Objective Function: Reconstruction vs. Prediction

The objective function used for training and generation is where these architectural decisions pay off. This is where the model refines and applies the internal logic it uses to generate new proteins that actually hold together.

Most heavy-hitter models, including ESM3, train with **Masked Language Modeling**. Hide part of the sequence, ask the model to fill in the blanks. The model views proteins through a symbolic lens and reasons through broad statistical patterns, so the training loop reinforces exactly that habit. This simulates evolution’s iterative logic: propose a change, check whether it seems viable (a probability distribution defines this), and keep the options that fit. When ESM3 generates new proteins, it leans on a distribution of probabilities, searching for answers that look evolutionarily plausible.

Odyssey trains with **Discrete Diffusion**, a reconstructive objective. Take a clean structure, add noise in small steps until it collapses into 3D static, then reverse that damage. Because the representation is spatial and updates begin locally, every correction starts as a negotiation amongst neighbouring voxels. A patch stabilises, passes that change outward, and the process spreads.

This setup rewards different instincts. A molecule stays viable only if it can hold together under local physical forces. Rebuilding a structure from noise forces the model to discover the rules that allow atoms to pack, loops to settle, pockets to form, and misfolds to unwind. Each denoising step asks: can this arrangement support itself? The model develops intuitions rooted in the physics a real molecule must obey.

This grounding matters for generative search. Evolution explores new shapes slowly, one mutation at a time, failing to visit countless viable structures simply because it never stumbled upon them.

A model trained through spatial reconstruction can push through unexplored regions because it judges whether a shape could work physically, regardless of whether it ever appeared evolutionarily.

**By rooting predictions in physical laws, we move beyond what “can exist” to what “can be built”, unlocking an era of biological engineering defined not just by rules of survival, but by genuine understanding and inventive control.**

## V. The Uncanny Valley

This is where we arrive, quite literally, back at the beginning.

I won’t overstate the case. The Anthrogen team has never claimed Odyssey1 is the full realisation of spatial intelligence. It is still a probabilistic model running on silicon, not a living system navigating thermodynamic gradients. But it is a powerful example of an architecture built to mimic the constraints of the system it models. And it’s a solid crack at building a structure that might be able to generate proteins, weird and wild, that stay coherent in the physical world.

![Weird symmetry: Heptapods, from Ted Chiang’s Story of Your Life](https://substackcdn.com/image/fetch/$s_!sXMS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b3cc6cf-974a-475e-bf45-f75ccda0c149_997x595.png)

**_Weird symmetry: Heptapods, from Ted Chiang’s Story of Your Life, do not experience time in sequences, but rather witness life as a finished circle. Their universe, their world model, language, and their physiology operate with one shared circular geometry._**

Beyond generative biology, Odyssey’s computational logic realised by Consensus mirrors a principle by which complex systems organise themselves: **local interactions reliably compound into global identities.**

This isomorphism between machine logic and world logic is key to the world models Li describes.<sup id="fnref8"><a href="#fn8">8</a></sup> Odyssey’s performance suggests the most [“efficient” explanation](https://atelfo.github.io/2023/05/17/intelligence-as-efficient-model-building.html) for life’s complexity won’t be found in greater data scale, but in acknowledging the structure of space itself. To understand the “epic” of life, our models must be governed by the same physical laws as the characters within it.

If this principle, foundational to everything from molecules to galaxy formation, turns out to be the universe’s core objective algorithm, then we’ll need a mechanism capable of replicating that physical invariant. That is the seed from which the next generation of general intelligence will grow.

**This is a pivotal moment, where we stop trying to force nature into the shape of our language models, and started shaping our models to fit the geometry of nature.** And frankly, if we’re finally moving past the era of infinite monkeys trying to brute-force the Iliad, it’s only fitting that the smarter sequel is named Odyssey.

## Notes

<a id="fn1"></a>
<sup>1</sup> The thought experiment basically proposes a monkey randomly pressing keys on a typewriter for an infinite amount of time would eventually type out the complete works of Shakespeare, purely by chance. Interestingly a peer-reviewed [numerical evaluation](https://www.sciencedirect.com/science/article/pii/S2773186324001014) recently found that there’s only about a 5% chance for a single chimp to plod away and end up with the word ‘bananas’ in a lifetime. It also found that even if you deployed 200,000 chimps, Shakespeare’s works will almost certainly never be typed by the time the universe ends. [↩](#fnref1)

<a id="fn2"></a>
<sup>2</sup> That same question is one we’ve grappled with in prior essays, both through the lens of [embodied](https://regenventures.substack.com/p/robofauna) or [evolutionary](https://regenventures.substack.com/p/intelligence-the-speed-of-flagella) intelligences. [↩](#fnref2)

<a id="fn3"></a>
<sup>3</sup> It’s hard to talk about protein foundation models in terms of where they sit in the zeitgeist without mentioning another battleground they’re pulled into: the debate over commoditising frontier models. We won’t dwell on it here for a few simple reasons. First, great analyses already exist - Owl Posting’s _Optimistic Case_ and Century of Bio’s _Modality Commoditisation_ are clear treatments, and Elliott’s flag on vertical integrators is close to where our own curiosity is leaning. Second, as both note, the horizon is still moving. These models are too early, and changing too quickly, for any prediction about commoditisation to stay meaningful for long. Especially in our domain, many of these models aren’t able to grapple with the complexity of the molecules and industrial environment well enough. [↩](#fnref3)

<a id="fn4"></a>
<sup>4</sup> This [overview](https://www.mackenziemorehead.com/is-attention-all-you-need/) is a good prequel to the story in biology, tracing the engineering pressures that led us to architectures optimised for next-token prediction, not world-model extraction. [↩](#fnref4)

<a id="fn5"></a>
<sup>5</sup> Elliott Hershberg goes deep in [this primer](https://centuryofbio.com/p/digital-evolution?utm_source=publication-search) on transformers and attention to contextualise them and their role in generative biology. I highly recommend reading his overview and the discussion of another foundation model, ProGen2 from Profluent Bio. [↩](#fnref5)

<a id="fn6"></a>
<sup>6</sup> AlphaFold is impressive, but its reputation outside biology is wildly inflated (as evidenced by DeepMind’s own documentation, outlining core gaps in AlphaFold). This [article](https://blog.genesmindsmachines.com/p/no-alphafold-has-not-completely-solved) by Claus Wilke defines the ‘protein problem’ as determining whether the protein has a stable fold at all, how stable that fold is, how mutations shift that stability, how many conformations exist, how a protein moves between them, how context (solvent, partners, cofactors) reshapes the energy landscape, and describing the entire Boltzmann ensemble of states, not just one snapshot. He argues essentially that a/AlphaFold still hasn’t nailed structure prediction B/structure prediction is the lowest hanging fruit to pluck, and C/‘solving’ all of the above remains far from reach. [↩](#fnref6)

<a id="fn7"></a>
<sup>7</sup> Shoutout to Boyd Varty, lion tracker, advisor, and friend of ReGen, who has gotten us obsessed with the concept of tracking. [↩](#fnref7)

<a id="fn8"></a>
<sup>8</sup> Peter Munz framed the isomorphism of form to its environment beautifully: ‘The behavior of a fish and the functioning of a theory of water are exactly identical.’ A fish represents water by its very structure—its fins, scales, and musculature are a physical ‘hypothesis’ of fluid dynamics that has failed to be falsified. As Alex Telford [argues](https://atelfo.github.io/2023/05/17/intelligence-as-efficient-model-building.html), intelligent models should work the same way: they shouldn’t just process data; they should embody the statistical shape of the environment they operate in. This resonates with biologist Mike Levin’s [concept](https://www.owlposting.com/p/the-optimistic-case-for-protein-foundation-193) of a ‘Platonic space’ of cognitive patterns. He argues that we don’t create intelligence so much as ‘midwife’ it into physical embodiments. By constraining the model to local, physical consensus, we aren’t programming the physics of folding; we are creating a substrate where the physics is the only logical emergent property. [↩](#fnref8)
