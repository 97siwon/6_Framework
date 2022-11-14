package edu.kh.project.member.model.service;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import edu.kh.project.member.model.vo.Member;

// 설계적 + 유지보수 + AOP
public interface MyPageService {

	
	 /** 회원 정보 수정
	 * @param inputMember
	 * @return
	 */
	/* public abstract */ int updateInfo(Member inputMember);

	/** 비밀번호 변경
	 * @param paramMap
	 * @return
	 */
	int changePw(Map<String, Object> paramMap);

	/** 회원 탈퇴 서비스
	 * @param memberNo
	 * @param memberPw
	 * @return
	 */
	int memberDelete(int memberNo, String memberPw);

	/** 프로필 이미지 수정
	 * @param webPath
	 * @param filePath
	 * @param profileImage
	 * @param loginMember
	 * @return result
	 */
	int updateProfile(String webPath, String filePath, 
			MultipartFile profileImage, Member loginMember) throws Exception;

}
