# Lab 5 - Starter

Teoman Ozkan

https://teopotter64.github.io/Lab5_Starter/expose.html

https://teopotter64.github.io/Lab5_Starter/explore.html

Check Your Understanding:

1. No, because the "message" feature is too broad to be contained in a single unit test. There are many components to the feature such as message validity, whether the message was sent from the local device to an external device correctly, whether the external device recieved the message... Since there are so many parts to check, "message" can't be verified using a single unit test.

2. Yes, because "max message length" is a small subset of the overall "message" feature. It only needs to work with the local input and check the input's length. Since it involves a much smaller portion of the overall system, a unit test can be written to check the lenngth of the message.
