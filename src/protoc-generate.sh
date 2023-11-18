# Root directory of app
ROOT_DIR=$(git rev-parse --show-toplevel)

# Path to Protoc Plugin
PROTOC_GEN_TS_PATH="${ROOT_DIR}/node_modules/.bin/protoc-gen-ts"

# Directory holding all .proto files
SRC_DIR="${ROOT_DIR}/src/protos/raw"

# Directory to write generated code (.d.ts files)
OUT_DIR="${ROOT_DIR}/src/protos/gen"

# Clean all existing generated files
rm -r "${OUT_DIR}"
mkdir "${OUT_DIR}"

# Generate all messages
protoc \
    --proto_path="${SRC_DIR}" $(find "${SRC_DIR}" -name "*.proto") \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc-web_out=import_style=commonjs,mode=grpcweb:${OUT_DIR}