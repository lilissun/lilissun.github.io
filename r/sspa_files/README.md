README for SSPA (Alpha)

Author: 
Li Li: lilissun@gmail.com

Outline: 
1. Introduction. 
2. Installation. 
3. Manual. 
4. Testing. 

-----------------------------------------------------------------------------
Introduction
SSPA is an automatic symbolic verification tool designed for stateful security protocols. Its main features are as follows. 
 * A large range of crypto primitives can be specified in SSPA, including symmetric encryption, asymmetric encryption, hash, signature, zero knowledge proof and etc. 
 * SSPA gives unbounded verification to the reachability properties. Protocol states can be handled in SSPA in a natural and intuitive way. 

-----------------------------------------------------------------------------
Installation
We have build our tool for three major operating systems currently used i.e., Mac OS X, Ubuntu and Windows. Please make sure the architecture of your operating system is correctly matched with the release. After extracting the files from the zip, the sspa (sspa.exe for Windows) should can be run in a command line tool without installing other packages. If you encounter any problem with running the program, please contact the author. Supports for other particular platforms could be delivered upon request. 

-----------------------------------------------------------------------------
Manual
The manual for SSPA currently is also in alpha version. It is placed in root of every release with filename MANUAL.md. 

-----------------------------------------------------------------------------
Testing
Upon receiving the tool, a test is recommended to ensure that the SSPA functions correctly in your operating system. 
In Mac OS X and Ubuntu, type the following in the bash
    cd root/of/tool
    ./test.sh
In Windows, type the following in the windows command line
    cd root/of/tool
    test.bat
If any error occurs, please contact the author. 

-----------------------------------------------------------------------------
Last Modified Date: 
2014-02-20