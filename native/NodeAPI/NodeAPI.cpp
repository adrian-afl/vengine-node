#define NAPI_EXPERIMENTAL
#include <napi.h>

#include <string>
#include <array>

#define asFloat(val)  val.As<Napi::Number>().FloatValue()
#define asInt32(val)  val.As<Napi::Number>().Int32Value()
#define asInt64(val)  val.As<Napi::Number>().Int64Value()
#define asUint32(val) val.As<Napi::Number>().Uint32Value()
#define asUint64(val) ((uint64_t)val.As<Napi::Number>().Uint32Value()) // there is no Uint32Value

#define asVoidBufferPointer(val) val.As<Napi::ArrayBuffer>().Data()

#define asBool(val)  val.As<Napi::Boolean>().Value()

bool lossless = false;

#define castBigIntToVoidPointer(bigint) ((bigint).As<Napi::BigInt>().Uint64Value(&lossless))

#define newPointer(val) Napi::BigInt::New(env, (uint64_t) val)
#define newBigInt(val) Napi::BigInt::New(env, (uint64_t) val)
#define newNumber(val) Napi::Number::New(env, val)
#define newBoolean(val) Napi::Boolean::New(env, val)

std::string asString(Napi::Value val) {
	auto obj = val.As<Napi::String>();
	return val.As<Napi::String>().Utf8Value();
}

std::vector<bool> asVectorOfBool(Napi::Value val) {
	auto array = val.As<Napi::Array>();
	std::vector<bool> vec = {};
	auto len = array.Length();
	for(uint32_t i=0;i<len;i++){
	    vec.push_back(asBool(array.Get(i)));
	}
	return vec;
}

#define ClearColorFloatsArray std::array<float, 4>

ClearColorFloatsArray asClearColor4Float(Napi::Value val) {
	auto array = val.As<Napi::Array>();
	ClearColorFloatsArray res = {0,0,0,0};
	auto len = array.Length();
	for(uint32_t i=0;i<len;i++){
	    res[i] = asFloat(array.Get(i));
	}
	return res;
}

std::vector<float> asVectorOfFloat(Napi::Value val) {
	auto array = val.As<Napi::Array>();
	std::vector<float> vec = {};
	auto len = array.Length();
	for(uint32_t i=0;i<len;i++){
	    vec.push_back(asFloat(array.Get(i)));
	}
	return vec;
}

std::vector<int32_t> asVectorOfInt32(Napi::Value val) {
	auto array = val.As<Napi::Array>();
	std::vector<int32_t> vec = {};
	auto len = array.Length();
	for(uint32_t i=0;i<len;i++){
	    vec.push_back(asInt32(array.Get(i)));
	}
	return vec;
}

template<typename T>
std::vector<T*> asVectorOfPointers(Napi::Value val) {
    auto array = val.As<Napi::Array>();
    std::vector<T*> vec;
    auto len = array.Length();
    for (uint32_t i = 0; i < len; i++) {
        vec.push_back(reinterpret_cast<T*>(castBigIntToVoidPointer(array.Get(i))));
    }
    return vec;
}

#include "nodeToolkitInterface.h"
#include "autogeneratedExports.h"
#include "bufferMapping.h"

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    #include "../nativeExports.h"
    return exports;
}

NODE_API_MODULE(addon, Init)
