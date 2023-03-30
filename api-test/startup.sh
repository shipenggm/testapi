java -Dkarate.config.dir=. -cp karate.jar com.intuit.karate.Main scenario/src/
echo $? > ./target/result.tmp
cp -r ./target /workspace
echo "ls -alh /workspace"
ls -alh /workspace     
echo "ls -alh"
ls -alh