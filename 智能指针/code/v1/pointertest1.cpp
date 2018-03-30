#include<iostream>
#include"smartpointer.h"
using namespace std;
int main(){
	SmartPointer<char> sp1;
	SmartPointer<const char> sp2 = "Hello World";
	return 0;
}
