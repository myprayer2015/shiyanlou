#ifndef _SMARTPOINTER_H
#define _SMARTPOINTER_H

using namespace std;

template<class T>
class SmartPointer{
public:
	SmartPointer():pointer(nullptr){cout<<"smart_constructor_unknown_ptr"<<endl;}

	SmartPointer(T* p):pointer(p){cout<<"smart_constructor_ptr"<<endl;
	}

	~SmartPointer(){
		cout<<"smart_deconstructor"<<endl;
		if(pointer)	delete pointer;
	}

private:
	T* pointer;
};
#endif //_SMARTPOINTER_H
