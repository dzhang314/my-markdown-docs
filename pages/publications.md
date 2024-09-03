# Your new reading list.

***Sidekick: In-Network Assistance for Secure End-to-End Transport Protocols***\
Gina Yuan, Matthew Sotoudeh, David K. Zhang,\
Michael Welzl, David Mazières, and Keith Winstein\
***NSDI 2024***, pages 1813--1830\
https://www.usenix.org/conference/nsdi24/presentation/yuan \
***NSDI 2024 Outstanding Paper Award and Community Award Winner!***\
Published online in April 2024.

**Abstract:** In response to concerns about protocol ossification and privacy,
post-TCP transport protocols such as QUIC and Web-RTC include end-to-end
encryption and authentication at the transport layer. This makes their packets
opaque to middleboxes, freeing the transport protocol to evolve but preventing
some in-network innovations and performance improvements. This paper describes
sidekick protocols: an approach to in-network assistance for opaque transport
protocols where in-network intermediaries help endpoints by sending information
adjacent to the underlying connection, which remains opaque and unmodified on
the wire.

A key technical challenge is how the sidekick connection can efficiently refer
to ranges of packets of the underlying connection without the ability to
observe cleartext sequence numbers. We present a mathematical tool called a
quACK that concisely represents a selective acknowledgment of opaque packets,
without access to cleartext sequence numbers.

In real-world and emulation-based evaluations, the sidekick improved
performance in several scenarios: early retransmission over lossy Wi-Fi paths,
proxy acknowledgments to save energy, and a path-aware congestion-control
mechanism we call PACUBIC that emulates a "split" connection.

--------------------------------------------------------------------------------

***An explicit 16-stage Runge--Kutta method of order 10 discovered by numerical search***\
David K. Zhang\
***Numerical Algorithms***, volume 96, pages 1243--1267\
DOI: [10.1007/s11075-024-01783-2](https://doi.org/10.1007/s11075-024-01783-2)\
Published online on March 1, 2024.

**Abstract:** This article presents the discovery of an explicit 16-stage
Runge–-Kutta method that numerically satisfies the Runge-–Kutta order
conditions (in Butcher form) to 10th order, conjecturally improving the
best-known number of stages in an explicit 10th-order Runge-–Kutta method from
17 to 16. Unlike the vast majority of published Runge-–Kutta methods, the
method presented in this paper was not constructed via symbolic analysis or the
use of simplifying assumptions, but instead by directly applying numerical
optimization and root-finding algorithms to the order conditions. A naïve
implementation of these algorithms would be made computationally infeasible
by the considerable size and complex structure of the Butcher equations.
However, we present a collection of software optimizations that greatly
accelerate the evaluation of the Butcher equations and their derivatives while
mitigating the effects of destructive cancellation, pushing these techniques
within the realm of feasibility. While we do not have a formal proof of order,
we present the results of numerical experiments to demonstrate that our method
satisfies the Butcher equations to an accuracy of over 3000 decimal digits.

--------------------------------------------------------------------------------

***Sidecar: in-network performance enhancements in the age of paranoid transport protocols***\
Gina Yuan, David K. Zhang, Matthew Sotoudeh, Michael Welzl, and Keith Winstein\
***HotNets 2022***, pages 221--227\
DOI: [10.1145/3563766.3564113](https://doi.org/10.1145/3563766.3564113)\
Published online on November 14, 2022.

**Abstract:** In response to ossification and privacy concerns, post-TCP
transport protocols such as QUIC are designed to be "paranoid"---opaque to
meddling middleboxes by encrypting and authenticating the header and
payload---making it impossible for Performance-Enhancing Proxies (PEPs) to
provide the same assistance as before. We propose a research agenda towards an
alternate approach to PEPs, creating a sidecar protocol that is loosely-coupled
to the unchanged and opaque, underlying transport protocol. The key technical
challenge to sidecar protocols is how to usefully refer to the packets of the
underlying connection without ossification. We have made progress on this
problem by creating a tool we call a quACK (quick ACK), a concise
representation of a multiset of numbers that can be used to efficiently decode
the randomly-encrypted packet contents a sidecar has received. We implement the
quACK and discuss how to achieve several applications with this approach:
alternate congestion control, ACK reduction, and PEP-to-PEP retransmission
across a lossy subpath.

--------------------------------------------------------------------------------

***Manipulating Elections by Selecting Issues***\
Jasper Lu, David Kai Zhang, Zinovi Rabinovich, Svetlana Obraztsova, and Yevgeniy Vorobeychik\
**AAMAS 2019**, pages 529--537\
DOI: [10.5555/3306127.3331736](https://dl.acm.org/doi/10.5555/3306127.3331736)\
Published online on May 8, 2019.

**Abstract:** Constructive election control considers the problem of an
adversary who seeks to sway the outcome of an electoral process in order to
ensure that their favored candidate wins. We consider the computational problem
of constructive election control via issue selection. In this problem, a part
 decides which political issues to focus on to ensure victory for the favored
 candidate. We also consider a variation in which the goal is to maximize the
 number of voters supporting the favored candidate. We present strong negative
 results, showing, for example, that the latter problem is inapproximable for
 any constant factor. On the positive side, we show that when issues are
 binary, the problem becomes tractable in several cases, and admits a
 2-approximation in the two-candidate case. Finally, we develop integer
 programming and heuristic methods for these problems.

--------------------------------------------------------------------------------

***Discovering New Runge--Kutta Methods Using Unstructured Numerical Search***\
David K. Zhang\
***Vanderbilt University***, Undergraduate Honors Thesis\
https://arxiv.org/abs/1911.00318 \
Submitted on April 16, 2019.

**Abstract:** Runge--Kutta methods are a popular class of numerical methods for
solving ordinary differential equations. Every Runge--Kutta method is
characterized by two basic parameters: its order, which measures the accuracy
of the solution it produces, and its number of stages, which measures the
amount of computational work it requires. The primary goal in constructing
Runge--Kutta methods is to maximize order using a minimum number of stages.
However, high-order Runge--Kutta methods are difficult to construct because
their parameters must satisfy an exponentially large system of polynomial
equations. This paper presents the first known 10<sup>th</sup>-order
Runge--Kutta method with only 16 stages, breaking a 40-year standing record for
the number of stages required to achieve 10<sup>th</sup>-order accuracy. It
also discusses the tools and techniques that enabled the discovery of this
method using a straightforward numerical search.

--------------------------------------------------------------------------------

***Binding energies and structures of two-dimensional excitonic complexes in transition metal dichalcogenides***\
Daniel W. Kidd, David K. Zhang. and Kálmán Varga\
***Physical Review B***, volume 93, issue 12, page 125423 (1--10)\
DOI: [10.1103/PhysRevB.93.125423](http://dx.doi.org/10.1103/PhysRevB.93.125423)\
Published online on March 18, 2016.

**Abstract:** The stochastic variational method is applied to excitonic
formations within semiconducting transition metal dichalcogenides using a
correlated Gaussian basis. The energy and structure of two- to six-particle
systems are investigated along with their dependence on the effective screening
length of the two-dimensional Keldysh potential and the electron-hole effective
mass ratio. Excited state biexcitons are shown to be bound, with binding
energies of the $L=0$ state showing good agreement with experimental measurements
of biexciton binding energies. Ground and newly discussed excited state
exciton-trions are predicted to be bound and their structures are investigated.

--------------------------------------------------------------------------------

***Excited Biexcitons in Transition Metal Dichalcogenides***\
David K. Zhang, Daniel W. Kidd, and Kálmán Varga\
***Nano Letters***, volume 15, issue 10, pages 7002--7005\
DOI: [10.1021/acs.nanolett.5b03009](http://dx.doi.org/10.1021/acs.nanolett.5b03009)\
Published online on September 30, 2015.

**Abstract:** The Stochastic Variational Method (SVM) is used to show that the
effective mass model correctly estimates the binding energies of excitons and
trions but fails to predict the experimental binding energy of the biexciton.
Using high-accuracy variational calculations, it is demonstrated that the
biexciton binding energy in transition metal dichalcogenides is smaller than the
trion binding energy, contradicting experimental findings. It is also shown that
the biexciton has bound excited states and that the binding energy of the $L=0$
excited state is in very good agreement with experimental data. This excited
state corresponds to a hole attached to a negative trion and may be a possible
resolution of the discrepancy between theory and experiment.

--------------------------------------------------------------------------------

***Excited Biexcitons in Transition Metal Dichalcogenides*** _(contributed conference talk)_\
David K. Zhang\
[**MAR16 Meeting of the American Physical Society**](http://meetings.aps.org/Meeting/MAR16/Content/3097)\
Talk delivered March 15, 2016, 4:30 PM–4:42 PM\
See [conference program listing](http://meetings.aps.org/Meeting/MAR16/Session/H24.9)
and [published abstract](http://absimage.aps.org/image/MAR16/MWS_MAR16-2015-000096.pdf).

**Abstract:** Recently, experimental measurements and theoretical modeling have
been in a disagreement concerning the binding energy of biexctions in transition
metal dichalcogenides. While theory predicts a smaller binding energy (∼20 meV)
that is, as logically expected, lower than that of the trion, experiment finds
values much larger (∼60 meV), actually exceeding those for the trion. In this
work, we show that there exists an excited state of the biexciton which yields
binding energies that match well with experimental findings and thus gives a
plausible explanation for the apparent discrepancy. Furthermore, it is shown
that the electron-hole correlation functions of the ground state biexciton and
trion are remarkably similar, possibly explaining why a distinct signature of
ground state biexcitons would not have been noticed experimentally.

--------------------------------------------------------------------------------

***A General Algorithm for the Efficient Derivation of Linear Multistep Methods***
_(contributed conference talk)_\
David K. Zhang and Samuel N. Jator\
[**AMS Southeastern Spring Sectional Meeting #1097** (UT Knoxville)](http://www.ams.org/meetings/sectional/2216_program.html)\
Talk delivered March 22, 2014, 3:15 p.m.\
See [conference program listing](http://www.ams.org/meetings/sectional/2216_program_saturday.html#0490)
and [published abstract](http://www.ams.org/amsmtgs/2216_abstracts/1097-65-490.pdf).

**Abstract:** Traditionally, linear multistep methods (LMMs) for the numerical
solution of initial value problems, such as Adams methods and backward
differentiation formulas, have been derived through the use of polynomial
interpolation and collocation through continuous schemes. While these methods
can be implemented in modern computer algebra systems, they require the use of
highly expensive operations such as symbolic matrix inversion. This imposes a
severe limit on the complexity of LMMs that can be derived. In this
presentation, we present a generalized algorithm for deriving LMMs based upon
Taylor series expansion. By our approach, we show that the derivation of a LMM
containing $k + 1$ terms is reducible to the numerical solution of a
$k \times k$ linear system, allowing for the efficient derivation of methods
including hundreds or thousands of terms. Furthermore, we show that this
algorithm is trivially generalizable to methods including arbitrarily many
off-grid points, and that it can be generalized to create LMMs for directly
solving initial value problems of arbitrarily high order, with the inclusion of
all intermediate derivative terms. Specific methods are stated and tested
numerically on well-known problems given in the literature.
