 #pragma once

#include <string>
#include <vector>
#include <array>
#include <set>
#include <functional>
#include <map>
#include <unordered_map>
#include <stdexcept>
#include <algorithm>
#ifdef _MSC_VER
#include <windows.h>
#endif
#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>
#define safedelete(a) if(a!=nullptr){delete a;a=nullptr;}
