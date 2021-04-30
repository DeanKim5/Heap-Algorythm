// heap.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <bits/stdc++.h>

using namespace std;

void heapSort(vector<int>& arr){
	
	priority_queue<int> h;
	//모든 원소를 차례대로 삽입
	for(int i=0;i<arr.size();i++){

		h.push(-arr[i]);
	}
	//힙에 삽입된 모든 원소를 차례대로 꺼내어 출력
	while(!h.empty()){
		printf("%d\n",-h.top());
	}
}

int n;
vector<int> arr;
void main(){

	cin >> n;
	for(int i;i<n;i++){
		int x;
		scanf_s("%d",&x);
		arr.push_back(x);
	}
	heapSort(arr);

}