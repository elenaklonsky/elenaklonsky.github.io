---
title: " working notes: alt-compute / neuromorphic architectures"
date: 2026-06-19
---
## working notes: alt-compute and neuromorphic architectures
[status: in progress. this is a rough outline + shapes of companies in an area i'm really interested in so far]

### Three things that determine what a computer can do

All computation is the same thing from first principles: a state(n) transformed by rules into state(n+1). But there are independent choices within the stack determine what's practically buildable and where a given stack has advantages versus tradeoffs:

1. **Algorithm:** which function you apply over which state. In principle, algorithm choice is independent of hardware. Any Turing-complete machine can run any algorithm - a simple example is in theory, a CPU could run the dense matrix multiplication necessary to train an LLM foundation model, albeit inefficiently - this is why people say it's all just software.
2. **Architecture** - how you physically organise state and processing on a compute. This defines where memory (known functions/primitives and current state) is stored, where processing occurs, how information moves between locations, and whether execution of processing to go from State(n) to State (n+1) is sequential, parallel, clocked, event-driven. Architecture is not neutral, whether it is general purpose or specialised - it makes certain computational patterns cheap and others expensive or even impossible at realistic scale and power.
3. **Substrate** - the physical material and design paradigm that implements the architecture. Silicon transistors (digital), photons (photonic), memristors (analog in-memory), biological neurons - all of these are substrates that aren’t necessarily bound to a single architecture or vis versa. Substrate determines the physics — speed of light vs speed of electrons, energy per operation, noise characteristics, whether memory and compute are co-located or separated.

The standard assumption in CS is that only the algorithm matters in terms of the bounds of what is possible, because we assume Turing completeness guarantees that any substrate can run any algorithm. This is mostly true - but in practice, architecture and substrate shape what gets built, what gets explored, and what gets abandoned. This is the hardware lottery (Sara Hooker, 2020): neural networks looked like a dead end for 30 years because the available computers couldn't do dense matrix multiplication fast enough - the algorithm was functional, but the substrate was wrong.

### current paradigm → von neumann computers

- **[more background + diagrams on Von Neumann Compute Bottleneck here]**
    
    - at most basic, all computers transform state according to rules - information (state) - the thing to do next (rules/program) and a mechanism of how those rules update the state
        
        - There is a set of states: configurations that can encode information (what is true inside the machine)
        - There is a transition function that, given the current state (and input), determines the next state. This rule is effective (mechanical/finite, no magic or oracles).
        - processing: the actual application of that rule to the state, step after step, producing a sequence state 0→state 1 →state 2 →…
    - the algorithm tells you which function you want over which state. independent of architecture. - e.g. for any allowed input state, here is the (effective, finite) procedure that determines the next state and, eventually, the output.
        
    - the **architecture** is the fixed organization of state and processing on a physical (or abstract) machine - it answers machine‑level questions, regardless of which algorithm you run:
        
        - where can state(n) be stored (what kinds of memories/locations exist)?
        - how can state(n) move between those locations?
        - what primitive operations for changing state are available?
        - in what pattern are those operations applied (sequentially, in parallel, etc.)?
        
        ```
        ┌─────────────────────────────────────────────────────────┐
        │                                                         │
        │   "All computation: state transformed by rules"         │
        │                                                         │
        │                                                         │
        │          ┌───────────┐                                  │
        │          │  STATE(n)   ◄── "what is true inside         │
        │          │           │      the machine right now"      │
        │          └─────┬─────┘                                  │
        │                │                                        │
        │                ▼                                        │
        │     ┌────────────────────┐                              │
        │     │ TRANSITION FUNCTIN │ ◄── "the rule: given         │
        │     │   f(state, input)  │      current state +         │
        │     │    → next state    │      input, determine        │
        │     └────────┬───────────┘      next state"             │
        │              │                  (effective, finite,     │
        │              │                   no oracles)            │
        │              ▼                                          │
        │          ┌───────────┐                                  │
        │          │ STATE(n+1)│                                  │
        │          └─────┬─────┘                                  │
        │                │                                        │
        │                ▼                                        │
        │             ( repeat )                                  │
        │    state₀ → state₁ → state₂ → ··· → output              │
        │                                                         │
        │    ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─            │
        │                                                         │
        │    ALGORITHM tells you WHICH function over WHICH state  │
        │    (independent of architecture)                        │
        │                                                         │
        │    ARCHITECTURE answers:                                │
        │      · where can state be stored?                       │
        │      · how does state move between locations?           │
        │      · what primitive operations change state?          │
        │      · in what pattern? (sequential, parallel, …)       │
        │                                                         │
        │    ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─            │
        │                                                         │
        │    VON NEUMANN ANSWERS:                                 │
        │                                                         │
        │      ┌──────────┐    bus    ┌───────────────┐           │
        │      │  MEMORY  │◄────────► │  PROCESSOR    │           │
        │      │          │           │               │           │
        │      │ state +  │  fetch/   │ decode rule   │           │
        │      │ rules    │  store    │ apply to state│           │
        │      │ (same    │           │ one step at   │           │
        │      │  place)  │           │ a time        │           │
        │      └──────────┘           └───────────────┘           │
        │                                                         │
        │      · state stored in single addressed memory          │
        │      · rules (program) stored in SAME memory            │
        │      · state moves over a shared bus                    │
        │      · one operation at a time, sequentially            │
        │                                                         │
        └─────────────────────────────────────────────────────────┘
        
        Fig. 1.  Computation, algorithms, and architecture — first principles.
        ```
        
    
    Purist CPU - developed by Von Neumann - is the incumbent architecture for general purpose processing.
    
    The defining architectural choice is the relationship between memory and processor.
    
    They're separate, connected by a **bus**, and state data and predefined instructions live together in memory - this is important because if your instructions live in memory just like data, then you only need to build one general-purpose machine.
    
    It allows the processing unit to be general purpose, because it only needs to know how to do a few things: fetch a word from memory, decode it as an instruction, execute it, repeat. This setup has advantages, including flexibility, adaptability to varying workloads, and the ability to easily scale systems and upgrade components.
    
    That makes this architecture great for conventional computing, and it won’t be going away any time soon:
    
    ```
    ┌─────────────────────────────────────────────────────────┐
    │                                                         │
    │   CPU — VON NEUMANN                                     │
    │   "one thing at a time, very fast"                      │
    │                                                         │
    │                                                         │
    │      ┌──────────┐    bus     ┌───────────────┐          │
    │      │  MEMORY  │◄──────────►│  PROCESSOR    │          │
    │      │          │            │               │          │
    │      │  state   │   fetch/   │  one powerful │          │
    │      │    +     │   store    │  unit         │          │
    │      │  rules   │            │               │          │
    │      │  (same   │            │  decode rule, │          │
    │      │  place)  │            │  apply to     │          │
    │      │          │            │  state        │          │
    │      └──────────┘            └───────────────┘          │
    │                                                         │
    │   · all state in one uniform memory                     │
    │   · rules stored in same memory                         │
    │   · one instruction stream: fetch → decode → execute    │
    │   · sequential: state₀ → state₁ → state₂ → ···          │
    └─────────────────────────────────────────────────────────┘                                                       │
    ```
    
    The GPU (and to some degree the tpu is an extension of this) - is specialised, but still a Von Neumann architecture, because memory lives separately from processors.
    
    When the GPU came along, many tasks that required parallelism used the GPU instead of the CPU. Instead of one powerful processor doing steps one after another, use many simple processors doing the same step all at once.
    
    The engineering consequence: if each processor only needs to do simple uniform work, you can make each one tiny and fit thousands on one chip, and trade the big caches and clever control logic of a CPU for raw quantity. Processing can happen in batches, and so the movement of data happens less, at larger volumes.
    
    ```
    ┌─────────────────────────────────────────────────────────┐
    │                                                         │
    │ │   GPU — MODIFIED VON NEUMANN                          │
    │   "many things at once, each simple"                    │
    │                                                         │
    │                                                         │
    │                              ┌──────────────────────┐   │
    │                              │ ┌──────┐ ┌──────┐    │   │
    │      ┌──────────┐            │ │ proc │ │ proc │    │   │
    │      │  MEMORY  │   wide     │ │+local│ │+local│    │   │
    │      │          │◄─────────► │ │state │ │state │    │   │
    │      │  rules   │   bus      │ └─mem──┘ └──mem─┘    │   │
    │      │          │            │ ┌──────┐ ┌──────┐    │   │
    │      │  (bulk   │  broadcast │ │ proc │ │ proc │    │   │
    │      │  state)  │  same rule │ │+local│ │+local│    │   │
    │      │          │  to all    │ │state │ │state │    │   │
    │      │          │            │ └──mem─┘ └──mem─┘    │   │
    │      │          │            │  ···      ···        │   │
    │      └──────────┘            │  (many times over)   │   │
    │                              └──────────────────────┘   │
    │                                                         │
    │                                                         │
    │  • One block of data is pulled from global memory       │
    │  • Pieces of that block are stored in LOCAL BUFFERS     │
    │  • Many processors do the SAME simple matmul operation  │
    │    on different pieces at the SAME time                 │
    │  • Most intermediate values stay on-chip, moving        │
    │    between local buffers, not back to global memory     │
    └─────────────────────────────────────────────────────────┘                                                   │
    ```
    
    The Von Neumann bottleneck is that data storage (memory) and computation (processing) are seperate and physically bottlenecked by the bus, sequential instruction stream.
    
    In CPUs, the bottleneck shows up as idle compute and wasted energy: the processing core spends a lot of cycles waiting for data/instructions to arrive over a narrow, shared bus.
    
    Modern computer processors are quite efficient at performing the discrete computations they’re usually tasked with. Though their efficiency nosedives when they must wait for data to move back and forth between memory and compute, they’re designed to quickly switch over to work on some unrelated task
    
    In GPUs/TPUs, the Von Neumann bottleneck is mitigated by applying the same dense linear algebra function simultaneously via massive parallelism,with local memory, but it still exists because data movement energy has improved much less than compute energy, so most of the power now goes into moving weights, not multiplying them; and any workload that is irregular, event‑driven, or highly sparse doesn’t align with the “big contiguous matmul” access pattern and falls back into being memory‑bound.
    

The dominant computing architecture since 1945 is von Neumann: memory and processor are separate, connected by a bus. Data and instructions live together in memory. The processor fetches, decodes, executes, repeats.

This design is flexible and general-purpose. CPUs are "purist" von Neumann (one thing at a time, very fast). GPUs are "modified" von Neumann — many simple processors doing the same operation in parallel, bulk data pulled from global memory into local buffers. TPUs are structurally similar to GPUs.

The bottleneck: because memory and compute are separated, data must travel between them. In AI workloads, ~90% of energy goes to moving data (weights between memory and compute), not to the actual multiplication. Compute energy is ~10% of the total. The bottleneck is limited physically by the width of the bus, and the speed at which you can feed data to the multiplier (which a photonic bus would max out at the speed of light).

This matters because:

- Foundation models are too large to live on-chip → weights must be streamed from global memory repeatedly
- more weights = larger storage = more distant storage = higher energy and latency (wire length: charge/discharge cost proportional to distance)
- for inference specifically: every output token requires reading the full weight matrix from memory. GPU utilisation drops to 20-40% during decode. The silicon is mostly idle during the phase where the model is actually "thinking"

### why gpu/tpu still work pretty well despite the bottleneck (+ why that's changing)

GPUs mitigated the von Neumann bottleneck for one specific workload: dense, regular, synchronous matrix multiplication - they enable massive parallelism, wide memory buses, on-chip buffers - all designed to feed the multiplier fast enough for dense matmul. This made GPUs (and more specialised TPUs) the perfect match for training deep neural networks (2012-2025), which is essentially one giant matmul repeated trillions of times -

But the bottleneck persists for anything that isn't dense matmul:

- **Sparse, irregular workloads** don't align with the "big contiguous matmul" access pattern → they're memory-bound on GPUs
- **Event-driven, asynchronous signals** (the way biological sensors work) can't be efficiently processed in the clocked, synchronous, batch-oriented GPU paradigm
- **On-device continuous learning** requires updating weights during use → but von Neumann separates memory and compute, so updating weights means moving them \cross the bus (the memory wall)

As the dominant workload shifts from training (one giant matmul, GPU's home turf) to inference and edge deployment (diverse, latency-sensitive, power-constrained, somewhat event driven), the von Neumann bottleneck goes from a tolerable inefficiency to a structural constraint.

### what neuromorphic + alt architectures offer and why they've failed commercially even if gpu/tpu is limited:

Neuromorphic (physical + simulated spiking neural networks), photonic, analog in-memory, and dataflow architectures all attack the von Neumann bottleneck from different angles:

- **neuromorphic** co-locates memory and compute in artificial synapses. Processing is event-driven (fires only when something happens) rather than clocked. Demonstrated 100-500× energy advantage per operation over GPUs for sparse, event-driven workloads
- **photonic** performs matrix multiplication at the speed of light. Lightmatter demonstrated BERT/ResNet on photonic hardware at accuracy comparable to 32-bit digital (Nature, Sep 2025)
- **analog in-memory** (memristive crossbars) performs matrix-vector multiplication _in memory_ — weights are physical conductance, computation happens at the speed of Ohm's law. No data movement at all

the reason none of these have reached commercial scale is **not truly hardware.** It's the software ecosystem that is necessary to create applications, the tooling, and the manufacturing economics. CUDA's 20-year ecosystem creates switching costs no challenger has overcome. A custom ASIC tape-out at 5nm costs $20M+ in mask costs. historically, the general-purpose improvement rate was fast enough (~50% annually in the Moore era) that specialised chips' advantages evaporated in ~6 years.

### things have changed →

Two things shifted:

1. **moore’s law stalled.** General-purpose improvement is now ~5% annually. A specialised chip's advantage lasts ~47 years instead of ~6 - the economics of building purpose-built hardware flipped to be more favourable relative to it’s investment
2. **The dominant workload fragmented.** Inference now accounts for >55% of AI infrastructure spending (projected 70-80% by end of 2026). The workload is diverse, latency-sensitive, and cost-elastic - the opposite of training's "one giant matmul." AWS, Nvidia, and Huawei have all independently begun disaggregating inference (splitting prefill and decode onto different specialised hardwares and architecture) because the workload demands it

**current working thesis on compute regime :**

my background work on neuromorphic is generally leading me to think about a transition in compute from homogenous architectures (cpu) to hetereogenous architectures (cpu/gpu) to full heterogeneous compute (full ecosystem workload specific + general purpose) as happening through three forcing functions:

**Regime I - Compute-Bound (Training Era, ~2012-2025).** Bottleneck is raw arithmetic throughput (FLOPS/dollar). GPUs win, hardware lottery in full effect though rate of acceleration shifted into single workload - one giant dense matmul - so specialisation is beginning within historic category (think TPUs)

**Regime II - Bandwidth/Latency-Bound (Inference Transition, 2025-next few years).** Bottleneck shifts to memory bandwidth and latency. Inference is memory-bound. Cerebras (100× token throughput vs H100), Groq (deterministic streaming), photonic interconnects (Lightmatter) all attack this in the context of inference physical workloads but in the context of dominant algorithms (foundation models/llms) - the hardware lottery is ‘cracking open’ but not necessarily fully open to diverse approaches outside of what has been already built - this is where we are today

**Regime III - Pattern-Bound (Heterogeneous/Edge Era, ~2027+).** the bottleneck will likely be a mismatch between the computational pattern we want to run and the hardware's native operation and is reinforced as we continue to go down specialisation trajectory that by definition preclude diversity of workloads, making them harder and harder to approximate. Embodied intelligence and memory constraints plateauing inference on LLMs will require an orthogonal approach - sparse, event-driven, continuous, physically coupled signals. These are the kind brains process effortlessly - and are fundamentally hostile to synchronous, dense, clocked architectures. This is where neuromorphic, analog in-memory, and heterogeneous orchestration between existing models and new ones become not just efficient but _necessary._

**tldr,** i think we're currently in the Regime I → II transition, but regime III is pretty visible on the horizon, and companies positioning now.

---

### if we accept these conditions are true, what makes an interesting alt-compute play? who captures value?

**my working list of interesting approaches:**

**one approach is the CUDA / gpu playbook:**

1. Find a workload where SNN algorithms produce value on GPUs that transformers can't. Build distribution, translation layer to make that algorithm workable for existing developer. When neuromorphic chips arrive, your software layer transfers to native substrate. You are the ecosystem, and the hardware vendor depends on you for relevance, rather than vis versa.
    - essentially - what is the ‘graphics’ pixels matmul workload that justifies gpu and CUDA’s existence, and how can you ensure you own CUDA, without owning the chip?

e.g - if the thesis is that substrate matters, why is a company running SNNs on GPUs interesting?

Algorithm and architecture are separable from substrate because of turing completeness. a spiking neural network is an algorithm (spiking, event-driven, temporally coded, with local learning rules). A neuromorphic chip is a _architecture_ + _substrate choice_ (co-located memory and compute, asynchronous, analog or mixed-signal). You can run the SNN algorithm on the "wrong" substrate (GPUs) so long as it is turing complete, but you just absorb an efficiency penalty.

There are algorithmic properties of SNNs, such as continuous learning, temporal encoding, event-driven processing that are real regardless of what substrate they run on. Specifically:

- **temporal encoding:** spike patterns preserve when something happened and in **relation **to **what - this is a ‘causal’ and ‘temporal’ structure that vector embeddings flatten into similarity scores. If this provides genuinely better **retrieval** relevance, it's valuable on any hardware.
    
- **continuous learning:** SNN learning rules update weights locally and continuously because they don't rely on backpropagation through the full network. This means the system can learn during use, not just during training.
    
    *** On GPUs this is simulated (using sparse tensor cores), which is less efficient but still captures the algorithmic benefit — the primary ‘dark matter’ you lose however by not having the neuromorphic/analog chip and sensor is real - in an embodied context where you aren’t connected to the cloud or a centralised model, this would happen **always** because it is physically realised, where in GPU it is simulated so long as you are connected to the model via a server rack or physical interconnect. Which is why robotics/embodiment is incremental without the chipset.
    
- **sparse activation:** SNNs are natively sparse (neurons fire only when stimulated). GPUs have sparse tensor cores that can exploit this - not as efficiently as neuromorphic hardware (2-3 orders of magnitude gains , but enough to provide a ~10× efficiency gain over dense processing
    

So the play is:

- **today:** capture the _algorithmic_ advantage of SNNs **if it is meaningful enough to persist even when approximated** on existing GPU infrastructure. Absorb the efficiency penalty. Build distribution and integration depth, integration layers, scale to justify the existence of the hardware.
- **later:** when neuromorphic chips reach commercial scale (which will be sooner, if algorithms demand it), move the same models to native substrate and capture the substrate advantage (1000× efficiency, on-device learning, milliwatt power budgets). The software layer and customer relationships transfer; the hardware changes underneath.

→ this is the same pattern Lightmatter is following: sell photonic interconnects to GPU users today (Regime II - solving the bandwidth bottleneck within the existing paradigm), while building toward photonic compute tomorrow (Regime III - native substrate). Don't build the chip and hope the ecosystem follows. Build the software and earn the right to go deeper.

The companies that historically failed in alt-compute (Rain AI, Graphcore, Wave Computing) tried to sell the substrate without having solved the software or the integration. Miruvor is doing the opposite: selling the algorithm + integration first, with the substrate as the future unlock.

---

**another approach is ‘kubernetes’ style orchestration:**

**own the orchestration layer across substrates -** the alternative thesis starts from the same premises but draws a different conclusion about where the durable value sits -if we accept that:

- The stack is fragmenting (prefill/decode disaggregation, compute gradient from hyperscale to edge) - which you will see if you read any GTC 2026 press release/thinkpiece
- Different workloads will increasingly demand different substrates (dense matmul on GPUs, decode on SRAM-heavy chips like Cerebras, event-driven perception on neuromorphic, optimisation on photonic/Iosing hardware)
- No single substrate will dominate inference the way GPUs dominated training (because inference workloads are inherently more diverse)

Then the binding constraint is"who makes it possible to use multiple substrates in a single system without the developer needing to know or care which hardware is underneath," and who ensures that workloads reliably are routed to the correct infrastructure.

I think this could happen at different scales - Callosum at ARIA is doing it in a single ‘heterogeneous architecture.’ You could also envision it as Kubernetes for heterogeneous compute, at the chip and infrastructure scale.. and it is structurally different from the other alt-architecture plays. Callosum doesn't build new hardware but rather it makes existing diverse hardware useful together.

---

**third approach i think is interesting is the vertically integrated ‘dark matter’ approach:**

Intel's Hala Point — 1,152 Loihi 2 chips, 1.15 billion neurons, deployed at Sandia National Labs — is the world's largest neuromorphic system. It achieves 3–5 orders of magnitude power reduction over von Neumann architectures for sparse, event-driven workloads. The Loihi 2 chip is programmable (unlike IBM's fixed-function TrueNorth) and supports on-chip learning rules.

The problem is that while we know the ‘killer apps of full neuromorphic stack’ many of them require betting against your own base - either against existing VLAs/infra - or are just too distributed and niche or component level to have a massive market.

In this view I think a full stack robotics or drone play that builds not just the hardware/sensing/algorithm layer, but actually uses it to capture value - e.g. in long duration recon missions, infrastructure

This is the most challenging and capital intensive approach, and my current view is it may come as act II of either approach 1 or approach 2, because the hardware lottery is too strong at the moment. Still, while Intel’s ecosystem is largely research based there are real world use case candidates emerging with data that should necessitate the hardware - event-camera-based robotics (drones, autonomous vehicles), continuous health monitoring wearables, smart sensor networks, and real-time optimization (e.g., telecommunications network management — Ericsson is already prototyping on Loihi). Each of these is natively sparse and event-driven.

That said, none has yet reached the scale where neuromorphic hardware is the single most obvious economic or tech choice to bet on (amongst many), over just running a small dense model on a low-power GPU.