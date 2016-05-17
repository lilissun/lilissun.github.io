MANUAL for SSPA v0.0.3 (Alpha)
This manual is currently in alpha version. 

Author: 
Li Li: lilissun@gmail.com

-----------------------------------------------------------------------------
Introduction
In SSPA, rules are represented by a set of logic rules. We use these rules to describe the capabilities and the knowledge of the adversary. In this manual, we illustrate how to construct such services, queries and the ceiling. In addition, we explain some disciplines the models should follow. 

The syntax and grammar checking for SSPA is still experimental. Only very limited errors can be identified during the parsing. Thus please check the model carefully to make sure it is correct. 

-----------------------------------------------------------------------------
Services
A rule consists of some predicates and a conclusion. A fact is either a term t or an event e(t_1, t_2, ..., t_n). t is a term which can be either a constant, a variable, a nonce, a configuration or a function. They have a hierarchy structure as follows. 

1. Rule : 
! f1, f2, ..., fn -[s1, s2, ..., sn]-> f;
! f1, f2, ..., fn -[s1, s2, ..., sn]-> c1, c2, ..., cn;

2. Fact f* : 
event(t1, t2, ..., tn)
t

3. Conversion c*:
<s1, s2>

4. State s*: 
state(t1, t2, ..., tn)

3. Term t* : 
constant n[]
nonce [n]
variable n
configuration |n|
function n(t1, t2, ..., tn)

* Whenever a variable appears in the output, it should appear in an input. 
* Whenever a nonce appears in a service, it should be initiated in an event. 
* IDs used in the model should be consistent. Function names and constant names should the same in a model if and only if they represent the same concept. 
* Nonces appeared in the events should be consistent because it means that the nonces are initiated in those events. 
-----------------------------------------------------------------------------
Queries
SSPA supports checking several queries within one model. Generally, a query is a rule with an event conclusion. 

-----------------------------------------------------------------------------
Last Modified Date
2014-02-20
