#define NAPI_EXPERIMENTAL
#include <napi.h>

#include <string>

#define asFloat(val)  val.As<Napi::Number>().FloatValue()
#define asInt32(val)  val.As<Napi::Number>().Int32Value()
#define asInt64(val)  val.As<Napi::Number>().Int64Value()
#define asUint32(val) val.As<Napi::Number>().Uint32Value()
#define asUint64(val) val.As<Napi::Number>().Uint64Value()
#define asUint64(val) val.As<Napi::Number>().Uint64Value()

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

#include "nodeToolkitInterface.h"

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    #include "../nativeExports.h"
    return exports;
}

NODE_API_MODULE(addon, Init)
