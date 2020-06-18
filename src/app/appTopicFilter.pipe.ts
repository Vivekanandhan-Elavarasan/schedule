import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
name:'topicFilter'
})
export class TopicFilterPipe implements PipeTransform{
    transform(topic:any,searchTerm:string){
        if(!topic||!searchTerm){
            return topic;
        }
        return topic.filter(topice=>topice.type.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
    }
}